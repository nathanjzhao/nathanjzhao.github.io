#!/usr/bin/env python3

import os
import re
from pathlib import Path

def create_preview_posts():
    """Create preview versions of all blog posts using the preview layout."""
    posts_dir = Path('/Users/nathanzhao/Documents/vscode/blog/_posts')
    preview_dir = Path('/Users/nathanzhao/Documents/vscode/blog/_previews')
    preview_dir.mkdir(exist_ok=True)
    
    # Get all markdown files
    post_files = sorted(posts_dir.glob('*.markdown'))
    
    print(f"🎨 Creating preview posts for {len(post_files)} posts...")
    
    for post_file in post_files:
        with open(post_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract front matter and body
        front_matter_match = re.match(r'^---\s*\n(.*?)\n---\s*\n(.*)', content, re.DOTALL)
        if not front_matter_match:
            print(f"⚠️  Skipping {post_file.name} - no front matter")
            continue
        
        front_matter, body = front_matter_match.groups()
        
        # Extract title for filename
        title_match = re.search(r'title:\s*(.+)', front_matter)
        title = title_match.group(1).strip().strip('"') if title_match else "Untitled"
        
        # Extract date from filename properly
        date_match = re.match(r'(\d{4}-\d{2}-\d{2})', post_file.stem)
        date_str = date_match.group(1) if date_match else "2024-01-01"
        
        # Create new front matter for preview (collections don't need permalink)
        # Escape title for YAML safety
        escaped_title = title.replace('"', '\\"')
        new_front_matter = f"""---
title: "{escaped_title}"
date: {date_str}
---"""
        
        # Create new content
        preview_content = new_front_matter + '\n\n' + body.strip()
        
        # Save preview post
        preview_file = preview_dir / f"{post_file.stem}.md"
        with open(preview_file, 'w', encoding='utf-8') as f:
            f.write(preview_content)
        
        print(f"📄 Created preview: /preview/{post_file.stem}/")
    
    print(f"✅ Preview posts created in: {preview_dir}")
    print(f"🌐 Access via: http://localhost:4000/preview/POST_NAME/")
    print(f"📊 Generated {len(post_files)} preview posts")

if __name__ == "__main__":
    create_preview_posts()