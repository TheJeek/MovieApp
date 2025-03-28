package de.hsaalen.movieapp;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.logging.Logger;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    static final Logger logger = Logger.getLogger(WebConfig.class.getName());

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        logger.info("Applying CORS configuration for /api/**");

        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000") // Adjust this to match your frontend URL
                //.allowedOrigins("http://193.197.231.233")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Ensure OPTIONS is included
                .allowedHeaders("*")
                .allowCredentials(true);

        logger.info("CORS configuration applied!!!");
    }
}


