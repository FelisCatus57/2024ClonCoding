package com.example.backend.global.error.exception;


import com.example.backend.global.error.ErrorCodeMessage;

public class EntityExistedException extends CustomException {

    public EntityExistedException(ErrorCodeMessage errorCodeMessage) {
        super(errorCodeMessage);
    }
}
