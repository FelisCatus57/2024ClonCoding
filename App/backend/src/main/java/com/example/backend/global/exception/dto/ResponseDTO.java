package com.example.backend.global.exception.dto;

import com.example.backend.global.exception.response.ResponseCodeMessage;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ResponseDTO {

    private int code;
    private String message;
    private Object data;

    public ResponseDTO(ResponseCodeMessage responseCodeMessage, Object data) {
        this.code = responseCodeMessage.getStatus();
        this.message = responseCodeMessage.getMessage();
        this.data = data;
    }

    public static ResponseDTO of(ResponseCodeMessage responseCodeMessage, Object data) {
        return new ResponseDTO(responseCodeMessage, data);
    }

    public static ResponseDTO of(ResponseCodeMessage responseCodeMessage) {
        return new ResponseDTO(responseCodeMessage, "");
    }

}





















