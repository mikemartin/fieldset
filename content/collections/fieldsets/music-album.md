---
id: a4d95bd5-da8b-4bec-bfc5-1062840bb5a1
blueprint: fieldsets
title: 'Music Album'
subtitle: 'Build a discography with artwork, songs and credits.'
meta_title: title
meta_description: description
social_image: site
updated_by: ac214142-16d4-46fb-8870-576ca392afb2
updated_at: 1633566722
template: fieldset/show
example: |-
  title: 'Music Album'
  artist: 'David Bowie'
  release_date: '1973-04-19 07:15'
  artwork: examples/bowie.svg
  credits:
    -
      name: 'David Bowie'
      role: Vocals
    -
      name: 'Trevor Bolder'
      role: Bass
    -
      name: 'Mick Woodmansey'
      role: Drums
    -
      name: 'Mic Ronson'
      role: Guitar
  songs:
    - b381a105-cc1b-4fd1-8e5b-a59f87080bd5
author: ac214142-16d4-46fb-8870-576ca392afb2
icon: icons/vinyl-record.svg
color:
  label: pop
  value:
    - '#FF269E'
    - '#FF6BF0'
dynamic_field_group: concert
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
