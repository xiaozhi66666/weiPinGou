// 定义一个消息提示的类
class msg {
  // 普通消息
  to(title, duration = 3000) {
    uni.showToast({
      title,
      icon: "none",
      duration
    })
  }
  // 成功消息
  success(title, duration = 3000) {
    uni.showToast({
      title,
      icon: "success",
      duration
    })
  }
  // 失败消息
  err(title, duration = 3000) {
    uni.showToast({
      title,
      icon: "error",
      duration
    })
  }
}

const message = new msg()
export default message
