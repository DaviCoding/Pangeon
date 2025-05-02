// ... Voice
import { play } from "elevenlabs";
import Voice from "./services/voiceService";
import { Readable } from "stream";
// ... IA
import IA from "./services/iaService"



// Está assim por enquanto, melhorias vem por ai
// O TEXTO E AS CONFIGURAÇÕES VÃO AQUI ABAIXO |
//                                           \ /


const responseIA = new IA("Oi, tudo bem?", "phi4").cURLPostIAPIGen()
console.log(await responseIA)

const audio: Readable = await new Voice(await responseIA, "pqHfZKP75CvOlQylNhV4", "eleven_multilingual_v2").genAudio();

await play(audio);