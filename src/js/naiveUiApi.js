// 各组件引入后，可直接使用naiveUi的独立api工具

import {
  createDiscreteApi,
} from "naive-ui";

const { message, notification, dialog, loadingBar } = createDiscreteApi(
  ["message", "dialog", "notification", "loadingBar"],
);

export default {
  message, notification, dialog, loadingBar
}
