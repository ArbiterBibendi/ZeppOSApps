import { createKeyboard, inputType } from "@zos/ui";
import { Vibrator, VIBRATOR_SCENE_NOTIFICATION } from "@zos/sensor";
const vibrateMorse = () => {
  if (!text) {
    return;
  }
  try {
    const vibrator = new Vibrator();
    vibrator.setMode(VIBRATOR_SCENE_NOTIFICATION);
    Vibrator.start();
  } catch (e) {
    cosole.error(e);
  }
};
Page({
  build() {
    const keyboard = createKeyboard({
      inputType: inputType.CHAR,
      onComplete: (keyboardWidget, result) => {
        const text = result.data;
        vibrateMorse(text);
      },
      onCancel: (keyboardWidget, result) => {},
    });
  },
});
