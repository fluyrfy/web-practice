from flask import Flask, render_template
app = Flask(__name__) # __name__ 表目前執行之模組


@app.route('/') # "@"為函式裝飾符/器 (decorator)
def Index():
  return render_template("index.html")

if __name__ == "__main__": # 如果以主程式執行
  app.run(debug=True) # 立刻啟動伺服器
