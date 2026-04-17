import { px } from "@zos/utils";
import {getDeviceInfo} from "@zos/device"
import * as hmUI from "@zos/ui"
import * as COLORS from "../utils/colors"
const {width: DEVICE_WIDTH, height: DEVICE_HEIGHT} = getDeviceInfo();
console.log(DEVICE_HEIGHT)
export const TEXT_STYLE = {
  x:0,
  y:0,
  w:100,
  y:100,
  text: "Monday"
}
export const BUTTON_STYLE = {
  text: "Big Chungus",
  layout: {
    'max-height': px(200),
    'corner-radius': 12
  },
  normal_color: 0x444444,
  press_color: 0x222222
  //align_h: hmUI.align.CENTER_H,
  //align_v: hmUI.align.CENTER_V,
}
export const LAYOUT_STYLE = {
  layout: {
    x: '0',
    y: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'left',
    'row-gap': px(4),
    'column-gap': px(4),
    'flex-flow': "wrap",
  }
}