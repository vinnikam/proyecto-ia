package com.miempresa.recursos;

import dev.langchain4j.service.SystemMessage;
import dev.langchain4j.service.UserMessage;
import io.quarkiverse.langchain4j.RegisterAiService;

@RegisterAiService
public interface Asistente {
    @SystemMessage("Eres un asistente útil. Responde en español, de forma clara y concisa.")
    String responder(@UserMessage String mensaje);
}
