
// クライアントと共通の定義
// HACK:JSONの中に埋め込むので仕方なく重複定義
// TODO:リファクタリング
const SEND_MESSAGE = 1;

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
        this._socket.send(JSON.stringify({ "type": SEND_MESSAGE, "name": name, "message": message }));
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
