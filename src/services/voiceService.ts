import { ElevenLabsClient, play } from "elevenlabs";
import { Readable } from "stream";
import "dotenv/config";

const client = new ElevenLabsClient();

class Voice {
    private text: string;
    private idVoice: string;
    private modelGenId: string;
    constructor(text: string = "Hello, World!", idVoice: string = "pqHfZKP75CvOlQylNhV4", modelGenId: string = "eleven_multilingual_v2") {
        this.text = text;
        this.idVoice = idVoice;
        this.modelGenId = modelGenId;
    }

    public async genAudio(): Promise<Readable> {
        return await client.textToSpeech.convert(this.idVoice, {
            text: this.text,
            model_id: this.modelGenId,
            output_format: "mp3_44100_128"
        });
    }
}

export default Voice
