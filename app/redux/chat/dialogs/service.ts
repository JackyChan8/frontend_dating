import $api from "@/http/index";

export default class DialogService {
    static async getAll() {
        const res = await $api.get('chat/get/dialogs')
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err.response;
        })
        if (res.status === 200) {
            return { status: res.data.status, message: res.data.message, data: res.data.data }
        } else {
            return { status: res.status, message: res.statusText, data: [] };
        }
        // return res;
    }
}