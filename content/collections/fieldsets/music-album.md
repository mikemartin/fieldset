---
id: a4d95bd5-da8b-4bec-bfc5-1062840bb5a1
blueprint: fieldsets
title: 'Music Album'
subtitle: 'Build a discography with artwork, songs and credits.'
meta_title: title
meta_description: description
social_image: site
updated_by: ac214142-16d4-46fb-8870-576ca392afb2
updated_at: 1633566160
template: fieldset/show
example: 62a05c4e-2882-4823-b415-f0237106cda7
author: ac214142-16d4-46fb-8870-576ca392afb2
icon: icons/vinyl-record.svg
color:
  label: pop
  value:
    - '#FF269E'
    - '#FF6BF0'
fieldset: |-
  title: 'Music Album'
  fields:
    -
      handle: artwork
      field:
        mode: grid
        container: assets
        restrict: false
        allow_uploads: true
        max_files: 1
        type: assets
        localizable: false
        listable: hidden
        display: Artwork
    -
      handle: artist
      field:
        input_type: text
        type: text
        localizable: false
        width: 50
        listable: hidden
        display: Artist
    -
      handle: release_date
      field:
        mode: single
        time_enabled: false
        time_required: false
        earliest_date: '1900-01-01'
        full_width: false
        inline: false
        columns: 1
        rows: 1
        type: date
        localizable: false
        width: 50
        listable: hidden
        display: 'Release date'
    -
      handle: songs
      field:
        mode: default
        collections:
          - examples
        type: entries
        localizable: false
        listable: hidden
        display: Songs
    -
      handle: credits
      field:
        fields:
          -
            handle: role
            field:
              input_type: text
              type: text
              localizable: false
              width: 50
              listable: hidden
              display: Role
          -
            handle: name
            field:
              input_type: text
              type: text
              localizable: false
              width: 50
              listable: hidden
              display: Name
        mode: table
        add_row: 'Add Credit'
        reorderable: true
        type: grid
        localizable: false
        listable: hidden
        display: Credits
---
