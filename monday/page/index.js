import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { BUTTON_STYLE, LAYOUT_STYLE, TEXT_STYLE } from "./index.layout.js";
import { create, id } from "@zos/media"
import { statAssetsSync } from '@zos/fs'

const buttonMappings = [
  {
    "text": "Anderdingus",
    "path": "anderdingus.mp3"
  },
  {
    "text": "FAHHH",
    "path": "fah.mp3"
  },
  {
    "text": "Vine Boom",
    "path": "vine-boom.mp3"
  },
  {
    "text": "Bruh",
    "path": "bruh.mp3"
  },
]

const logger = Logger.getLogger("helloworld");
Page({
  onInit() {
    logger.debug("page onInit invoked");
    hmUI.setStatusBarVisible(false)
  },
  build() {
    logger.debug("page build invoked");
    const player = create(id.PLAYER)
    player.addEventListener(player.event.PREPARE, function(){
      player.start()
    })
    player.addEventListener(player.event.COMPLETE, function(){
      player.stop()
    })
    const container = hmUI.createWidget(hmUI.widget.VIRTUAL_CONTAINER, LAYOUT_STYLE)


    let mappingIndex = 0
    buttonMappings.forEach((mapping) => {
        console.log(mappingIndex)
      const button = hmUI.createWidget(hmUI.widget.BUTTON, BUTTON_STYLE)
      button.text = mapping.text
      container.addLayoutChild(button, mappingIndex++)
      button.click_func = () => {
        player.setSource(player.source.FILE, {file: "raw/" + mapping.path})
        player.prepare()
      }
    })


  },
  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});
