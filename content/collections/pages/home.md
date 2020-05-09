---
title: Home
template: home
fieldset: seo
updated_by: ac214142-16d4-46fb-8870-576ca392afb2
updated_at: 1589012878
code: |
  title: SEO Meta Tags
  fields:
    -
      handle: meta_title
      field:
        type: select
        display: 'Meta Title'
        options:
          title: Title
          headline: Headline
          custom: Custom
        default: title
    -
      handle: custom_meta_title
      field:
        type: text
        display: 'Custom Meta Title'
        input_type: text
        character_limit: 60
        if:
          meta_title: 'equals custom'
    -
      handle: meta_description
      field:
        type: select
        display: 'Meta Description'
        options:
          site: 'Site Description'
          summary: Summary
          excerpt: Excerpt
          headline: Headline
          custom: Custom
        default: site
    -
      handle: custom_meta_description
      field:
        type: text
        display: 'Custom Meta Description'
        input_type: text
        character_limit: 160
        if:
          meta_description: 'equals custom'
    -
      handle: social_image
      field:
        type: select
        display: 'Social image'
        instructions: 'This image is used as a social network preview image.'
        options:
          site: 'Site Image'
          image: Image
          background: Background
          custom: Custom
        default: site
    -
      handle: custom_social_image
      field:
        type: assets
        display: 'Custom Social Image'
        folder: seo
        container: assets
        max_files: 1
        mode: grid
        if:
          social_image: 'equals custom'
id: home
---
