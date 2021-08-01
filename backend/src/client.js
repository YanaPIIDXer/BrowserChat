const Types = require("./json_types");

// クライアントクラス
class Client {
    // コンストラクタ
    constructor(id, socket) {
        this._id = id;
        this._socket = socket;
        this._name = null;
    }

    // メッセージ送信
    sendMessage(name, message) {
        this._socket.send(JSON.stringify({ "type": Types.SEND_MESSAGE, "name": name, "message": message }));
    }

    // IDのゲッター
    get id() {
        return this._id;
    }

    // 有効なクライアントか？
    get isValid() {
        return (this._name !== null);
    }

    // 名前
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}

module.exports = Client;
