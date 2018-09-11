package com.np.controller;

import com.np.model.Greeting;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloController {

    @GetMapping("/hello-world")
    @ResponseBody
    public Greeting index() {
        return new Greeting(1, "Hello");
    }

}