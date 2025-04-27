// ... Voice
import { play } from "elevenlabs";
import Voice from "./services/voiceService";
import { Readable } from "stream";
// ... IA
import IA from "./services/iaService"

const responseIA = new IA("Olá, meu nome é Davi!", "phi4").cURLPostIAPIGen()
console.log(await responseIA)

const audio: Readable = await new Voice(await responseIA, "pqHfZKP75CvOlQylNhV4", "eleven_multilingual_v2").genAudio();

await play(audio);