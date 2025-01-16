import { CohereClient } from "cohere-ai";

const client = new CohereClient({ token: "ABCDE" });  


async function StoryTellerRequest(userMessage) { 

await client.chat(
	{
		message: userMessage,
		model: "command-r-08-2024",
		preamble: "You are an RPG storyteller. You must guide the player between scenarios and challenges to solve the story",
		chatHistory: [
			{ 
				role : "USER", 
				message: "\"Eu saco meu arco longo\""
			}
		]
	}
)
 }

export default StoryTellerRequest;