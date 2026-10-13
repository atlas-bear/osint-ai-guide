-- Give headings the same ids GitHub gives them, so that the cross-page links
-- written for the README (for example 02-ai-assistants.md#21-comparison-table)
-- resolve on the website too. Pandoc's own ids drop leading digits, which
-- would break every link to a numbered section.

local function github_slug(text)
  local s = pandoc.utils.stringify(text):lower()
  s = s:gsub("[^%w%s%-]", "")   -- keep letters, digits, spaces and hyphens
  s = s:gsub("%s", "-")
  return s
end

function Header(el)
  el.identifier = github_slug(el.content)
  return el
end
