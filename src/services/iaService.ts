import "dotenv/config";
import axios from "axios";

class IA {
    private prompt: string;
    private model: string;
    private url: string;
    constructor(prompt: string = "Hello, World!", model: string) {
        this.prompt = prompt;
        this.model = model;
        this.url = "http://localhost:11434/api/generate";
    }

    async cURLPostIAPIGen() {
        let response = await axios.post(this.url, {
            "model": this.model,
            "prompt": this.prompt,
            "stream": false
        })
        return response.data.response
    }
}

export default IA
