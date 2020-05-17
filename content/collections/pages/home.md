---
title: 'Field:Set'
template: home
fieldset: seo
updated_by: ac214142-16d4-46fb-8870-576ca392afb2
updated_at: 1589109119
code: |
  title: Coming soon
  sections:
    main:
      display: Main
      fields:
        -
          handle: subtitle
          field:
            input_type: text
            type: text
            display: Subtitle
        -
          handle: label
          field:
            input_type: text
            type: text
            display: Label
        -
          handle: description
          field:
            input_type: text
            type: text
            display: Description
        -
          handle: form
          field:
            mode: default
            type: form
            display: Form
            max_items: 1
            width: 50
        -
          handle: button
          field:
            input_type: text
            type: text
            display: Button
            width: 50
        -
          handle: notification_title
          field:
            input_type: text
            type: text
            display: 'Notification Title'
            width: 50
        -
          handle: notification_message
          field:
            input_type: text
            type: text
            display: 'Notification Message'
            width: 50
    seo:
      display: SEO
      fields:
        -
          handle: meta_title
          field:
            options:
              title: Title
              custom: Custom
            default: title
            type: select
            display: 'Meta Title'
        -
          handle: custom_meta_title
          field:
            input_type: text
            character_limit: 60
            type: text
            display: 'Custom Meta Title'
            if:
              meta_title: 'equals custom'
        -
          handle: meta_description
          field:
            options:
              description: Description
              custom: Custom
            default: description
            type: select
            listable: hidden
            display: 'Meta Description'
        -
          handle: custom_meta_description
          field:
            input_type: text
            character_limit: 160
            type: text
            display: 'Custom Meta Description'
            if:
              meta_description: 'equals custom'
        -
          handle: social_image
          field:
            options:
              image: Image
              custom: Custom
            default: site
            type: select
            listable: hidden
            display: 'Social image'
        -
          handle: custom_social_image
          field:
            container: assets
            mode: grid
            folder: seo
            allow_uploads: true
            max_files: 1
            type: assets
            listable: hidden
            display: 'Custom Social Image'
            if:
              social_image: 'equals custom'
subtitle: 'Blueprints, fieldsets & forms for {statamic}'
description: 'Content modeling resources <br/>for your Statamic projects<span class="text-pink">.</span>'
social_image: custom
form: subscribe
meta_title: custom
meta_description: description
custom_social_image: seo/share.png
label: 'Coming soon'
button: 'Get notified'
custom_meta_title: 'Field:Set // Blueprints, fieldsets & forms for Statamic.'
notification_title: 'Thanks for your idea'
notification_message: 'We will email you when we launch'
blueprint: home
id: home
---
