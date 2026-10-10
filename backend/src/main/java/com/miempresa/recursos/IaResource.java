package com.miempresa.recursos;

import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/api/ia")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class IaResource {
    @Inject
    Asistente asistente;

    public record ChatRequest(String mensaje) {}
    public record ChatResponse(String respuesta) {}

    @POST
    @Path("/chat")
    public ChatResponse chat(ChatRequest request) {
        return new ChatResponse(asistente.responder(request.mensaje()));
    }
}
