-- Footnotes for the guide are defined once, in docs/_references.md, so that the
-- single-file README can be generated from the same sources. Pandoc only
-- renders a footnote whose definition is in the same document, so this filter
-- loads the shared definitions and turns every [^key] reference on a page into
-- a real footnote. Unknown keys abort the build.

local defs = {}
local loaded = false

local function load_defs()
  if loaded then return end
  loaded = true
  local dir = quarto.project.directory or "."
  local f = assert(io.open(dir .. "/_references.md", "r"), "cannot open _references.md")
  local text = f:read("a")
  f:close()
  for key, body in text:gmatch("\n%[%^([%w%-]+)%]:%s*([^\n]*)") do
    defs[key] = pandoc.read(body, "markdown").blocks
  end
end

local function note_for(key)
  local blocks = defs[key]
  if not blocks then
    error("footnote [^" .. key .. "] has no definition in _references.md")
  end
  return pandoc.Note(blocks)
end

-- Split a Str such as "text[^key]." into Str("text"), Note, Str(".").
function Str(el)
  if not el.text:find("%[%^[%w%-]+%]") then return nil end
  load_defs()
  local out = {}
  local rest = el.text
  while true do
    local s, e, key = rest:find("%[%^([%w%-]+)%]")
    if not s then break end
    if s > 1 then table.insert(out, pandoc.Str(rest:sub(1, s - 1))) end
    table.insert(out, note_for(key))
    rest = rest:sub(e + 1)
  end
  if rest ~= "" then table.insert(out, pandoc.Str(rest)) end
  return out
end
