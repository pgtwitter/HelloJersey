package my;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("hello")
public class HelloResource {
	@GET
	@Produces(MediaType.TEXT_PLAIN + ";charset=utf-8")
	public String hello(@DefaultValue("Anonymous") @QueryParam("user") String user) {
		return "Hello, " + user;
	}

}
