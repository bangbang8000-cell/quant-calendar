#!/usr/bin/env python3
"""
Extract JS modules from index.html.
Reads the inline <script> block and extracts code sections into separate module files.
"""
import re
import os

BASE = '/home/evergreen/.openclaw/workspace/quant-calendar-ops/frontend'

with open(os.path.join(BASE, 'index.html'), 'r') as f:
    html = f.read()

# Find the <script> block at the end
script_match = re.search(r'<script>\s*// ===== Vue 应用初始化.*?</script>', html, re.DOTALL)
if not script_match:
    print("ERROR: Could not find the Vue app <script> block")
    exit(1)

full_script = script_match.group()
script_start = script_match.start()
script_end = script_match.end()

# Extract just the setup() body (everything inside setup() { ... return {...}; })
setup_match = re.search(r'setup\(\)\s*\{', full_script)
if not setup_match:
    print("ERROR: Could not find setup()")
    exit(1)

# Find the matching return statement and closing brace
# Look for "return {" and then the matching "}"
setup_body_start = setup_match.end()
setup_body = full_script[setup_body_start:]

# Find the return block
return_match = re.search(r'\n\s+return\s*\{', setup_body)
if not return_match:
    print("ERROR: Could not find return block")
    exit(1)

# Split the setup body into: declarations + return block
declarations = setup_body[:return_match.start()]
return_start_in_body = return_match.start()

# Find the end of the return block (the closing "};" followed by the next "}")
# The return block ends with:
#   };
# }
return_block_text = setup_body[return_start_in_body:]
# Find "};" that closes the return object, then "}" that closes setup()
closing = re.search(r'\};\s*\}', return_block_text)
if not closing:
    print("ERROR: Could not find return block end")
    exit(1)

return_block = return_block_text[:closing.end()-2]  # up to "};"
after_return = return_block_text[closing.end()-2:]  # "}\n" onwards

print(f"Declarations length: {len(declarations)}")
print(f"Return block length: {len(return_block)}")
print(f"Script start/end in HTML: {script_start}/{script_end}")

# Save the entire inline script for analysis
with open(os.path.join(BASE, '_inline_script.js'), 'w') as f:
    f.write(full_script)

print("Saved full inline script to _inline_script.js")

# Print section markers to help identify boundaries
for line_no, line in enumerate(declarations.split('\n'), 1):
    if '// ====' in line or '// ──' in line:
        print(f"  Line {line_no}: {line.strip()}")
