{
  "targets": [
    {
      "target_name": "neospeech",
      "sources": [ "binding/neospeech.cc" ],
      "link_settings": {
        "libraries": [
          "<(module_root_dir)/binding/libttsapi/libttsapi.lib",
        ]
      }
    ,
    "conditions": [
       ['OS=="win"', {
          'copies': [
            {
              'destination': '<(module_root_dir)/build/Release/',
              'files': [
                '<(module_root_dir)/binding/libttsapi/libttsapi.dll'
              ]
            }
          ]
        }]
      ]
  
}
]
}
