import CodeBlock from "../components/CustomCodeBlock"
import SourceLink from "../components/SourceLink";

export default function SpringBoot() {

const springbootAnnotation =
`import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}`

const springbootEndpoint =
`import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}

@RestController
class MyController {
    @GetMapping("/hello")
    public String hello() {
        return "Hello, Spring Boot!";
    }
}
`

const springbootStarters =
`<!-- In Maven -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
`

const springbootActuator = 
`<!-- In Maven -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>`

const springbootDevTools =
`<!-- In Maven -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <scope>runtime</scope>
</dependency>`

const springbootEntity =
`import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email;

    // getters and setters
}
`

const springbootModel =
`public class UserProfile {
    private String username;
    private String email;
    private int age;

    // Constructors
    public UserProfile() {
    }

    public UserProfile(String username, String email, int age) {
        this.username = username;
        this.email = email;
        this.age = age;
    }

    // Getters and setters ...
}
`

const springbootController =
`import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        user.setId(id);
        return userRepository.save(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }
}`

const springbootRepository =
`import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // Additional custom queries can be defined here
}
`

    return (
        <div className="container content">
            <h2>Spring Boot</h2>
            <p>Open-source <span className="underline underline-offset-2 font-bold">Java-based framework</span> used to create standalone, production-grade Spring-based Applications. It is part of the larger Spring Framework and is <strong>designed to simplify the development of Java applications</strong>, <strong>particularly</strong> for building <strong>microservices-based architectures</strong>. Spring Boot <strong>provides</strong> a set of <strong>conventions</strong> and <strong>defaults</strong> for application configuration, which reduces the need for manual setup and boilerplate code.<br />Key features of Spring Boot include:
            </p>

            <h3>1. Convention over Configuration: </h3>
            <p>Spring Boot adopts the <strong>convention over configuration</strong> paradigm, reducing the need for developers to specify a lot of configuration settings. It comes with <strong>sensible defaults and follows best practices</strong>, making it easier to get started with a new project.</p>
            <p>For example, if you have a class annotated with <strong>@SpringBootApplication</strong>, it implicitly provides a lot of configuration:</p>
            <CodeBlock code={springbootAnnotation} language={"java"} />
            <p>Here, <strong>@SpringBootApplication</strong> is a combination of <strong>@Configuration</strong>, <strong>@EnableAutoConfiguration</strong>, and <strong>@ComponentScan</strong>, providing a convenient way to bootstrap a Spring application with sensible defaults.</p>

            <h3>2. Embedded Server Support: </h3>
            <p>Spring Boot includes <strong>embedded servers like Tomcat, Jetty, and Undertow</strong>, eliminating the need for external server setup. This makes it <strong>easy to package</strong> your application as a standalone <strong>JAR or WAR file</strong> that can be executed with a simple java -jar command.</p>
            <p>For instance, if you're using the default embedded Tomcat server, you can create a <strong>simple REST endpoint</strong>:</p>
            <CodeBlock code={springbootEndpoint} language={"java"} />
            <p>When you run this application, you can access the <strong>"/hello"</strong> endpoint without the need for an external server.</p>

            <h3>3. Auto-Configuration:</h3>
            <p>Spring Boot can <strong>automatically configure various components</strong> based on the dependencies present in your project. It leverages the concept of "sensible defaults" to reduce the amount of configuration needed.</p>
            <p>For example, if you <strong>include the spring-boot-starter-data-jpa dependency</strong> in your project, Spring Boot will <strong>automatically configure</strong> a <strong>DataSource</strong> and set up <strong>JPA</strong>.</p>

            <h3>4. Spring Boot Starters:</h3>
            <p>Starters are a set of <strong>convenient dependency descriptors</strong> that you can include in your application. They provide a <strong>quick way to add commonly used dependencies to your project</strong>, reducing the need for manual dependency management.</p>
            <p>For instance, if you want to build a web application, you can include the <strong>spring-boot-starter-web</strong> starter in your <strong>pom.xml</strong> or build.gradle:</p>
            <CodeBlock code={springbootStarters} language={"java"} />

            <h3>5. Spring Boot Actuator:</h3>
            <p>Actuator is a set of <strong>production-ready features</strong> that help you monitor and manage your application. It <strong>includes</strong> <strong>endpoints for health checks, application metrics, environment properties, and more</strong>.</p>
            <p>By including the <strong>spring-boot-starter-actuator</strong> starter, you gain access to various endpoints like <strong>/actuator/health, /actuator/metrics, and more</strong>.</p>
            <CodeBlock code={springbootActuator} language={"java"} />

            <h3>6. Spring Boot DevTools:</h3>
            <p>DevTools provide <strong>additional development-time features</strong> like automatic <strong>application restart, live reloading of changes, and enhanced logging</strong>. These tools are aimed at improving the developer's experience during the development phase.</p>
            <p>Adding the <strong>spring-boot-devtools</strong> dependency allows for automatic application restarts and live reloading during development.</p>
            <CodeBlock code={springbootDevTools} language={"java"} />

            <h3>7. Microservices Support:</h3>
            <p>Spring Boot is <strong>well-suited for building strong microservices</strong> due to its modular design and <strong>support for containerization technologies like Docker</strong>. It integrates seamlessly with Spring Cloud, a set of tools for building distributed systems.</p>

            <p className="mb-[10em]">Overall, Spring Boot simplifies the process of building and deploying Spring-based applications by providing a set of conventions, defaults, and pre-built components, allowing developers to focus more on business logic and less on infrastructure concerns.</p>
            
            <h2 className="mt-20">Building applications with Spring Boot</h2>
            <p>When building applications with Spring Boot, it's common to organize the code using the <strong>Model-View-Controller (MVC)</strong> pattern. Let's delve into each key component: Entity, Model, Controller, and Repository.</p>

            <h3>Entity:</h3>
            <p>In Spring Boot, an <strong>entity</strong> typically <strong>represents</strong> a <strong>data object</strong> that is stored <strong>in a database</strong>. Entities are usually <strong>annotated with @Entity</strong> to indicate that they are <strong>JPA (Java Persistence API) entities</strong>. Here's an example of a simple entity class:</p>
            <CodeBlock code={springbootEntity} language={"java"} />
            <p>n this example, the User class is marked as an entity with <strong>@Entity</strong>. The <strong>@Id annotation denotes the primary key</strong>, and @GeneratedValue indicates that the ID should be generated automatically.</p>

            <h3>Model:</h3>
            <p>In Spring MVC, the term <strong>Model</strong> refers to the <strong>data and business logic of the application</strong>. It is often represented by <strong>classes</strong> that <strong>encapsulate the application's state</strong>. In the context of Spring Boot, the entity class can also serve as the model, especially for simple applications.</p>
            <p>However, in more complex scenarios, you might create separate model classes to represent data that doesn't necessarily map directly to database entities. These model classes can be <strong>used to transfer data between the controller and the view</strong>.</p>
            <CodeBlock code={springbootModel} language={"java"} />

            <h3>Controller:</h3>
            <p>Controllers <strong>handle incoming HTTP requests</strong>, process them, and return an appropriate response. They are responsible for <strong>interacting</strong> with the <strong>service layer</strong>, invoking business logic, and returning the result to the client.</p>
            <CodeBlock code={springbootController} language={"java"} />
            <p>In this example, the UserController handles <strong>CRUD (Create, Read, Update, Delete) operations</strong> for a <strong>User entity</strong>. The <strong>@RestController</strong> annotation indicates that this class <strong>will handle HTTP requests and produce JSON responses.</strong> The <strong>@RequestMapping("/users")</strong> annotation specifies the <strong>base URL for all endpoints</strong> in this controller.</p>

            <h3>Repository:</h3>
            <p>The repository is <strong>responsible for data access and manipulation</strong>. In the context of Spring Boot, repositories are often <strong>interfaces</strong> that <strong>extend JpaRepository</strong> or a similar repository interface <strong>provided by Spring Data JPA</strong>.</p>
            <CodeBlock code={springbootRepository} language={"java"} />
            <p>Additionally, you can <strong>define custom query methods in this interface</strong>.</p>

            <p>These components work together to create a basic Spring Boot application with a <strong>RESTful API</strong> for managing user entities. Remember that the actual structure and complexity of your application may vary based on your specific requirements and architectural choices.</p>

            <div className="sources bg-dark-300 rounded-lg p-4 mt-10">
                <h4>Sources</h4>
                <SourceLink name={"Spring Boot Documentation"} link={"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/"} />
                <SourceLink name={"Stack Overflow"} link={"https://stackoverflow.com/"} />
                <SourceLink name={"Chat GPT"} link={"https://chat.openai.com/"} />
            </div>

        </div>
    )
}
