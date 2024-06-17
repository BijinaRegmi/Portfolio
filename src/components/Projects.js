import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { UserCard } from "react-ui-cards";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import me from "../assets/images/me.png";
import { Link } from "react-router-dom";
import zIndex from "@mui/material/styles/zIndex";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const About = () => {
  return (
    <div>
      <div className="project-content">
        <div className="projects-heading">
          <h3>
            <span>
              Loot at my
              <br></br>
              recent projects
            </span>
          </h3>
        </div>
        <div className="projects-carousel" style={{ zIndex: 9999 }}>
          <Carousel responsive={responsive}>
            <div>
              {" "}
              <Card sx={{ maxWidth: 345 }} className="projects-card">
                <Link to="https://www.youtube.com/">
                  <CardMedia component="img" height="350" image={me} />
                </Link>
              </Card>
            </div>
            <div>
              {" "}
              <Card sx={{ maxWidth: 345 }} className="projects-card">
                <CardMedia component="img" height="350" image={me} />
              </Card>
            </div>
            <div>
              {" "}
              <Card sx={{ maxWidth: 345 }} className="projects-card">
                <CardMedia component="img" height="350" image={me} />
              </Card>
            </div>
            <div>
              {" "}
              <Card sx={{ maxWidth: 345 }} className="projects-card">
                <CardMedia component="img" height="350" image={me} />
              </Card>
            </div>
            <div>
              {" "}
              <Card sx={{ maxWidth: 345 }} className="projects-card">
                <CardMedia component="img" height="350" image={me} />
              </Card>
            </div>
            <div>
              {" "}
              <Card sx={{ maxWidth: 345 }} className="projects-card">
                <CardMedia component="img" height="350" image={me} />
              </Card>
            </div>
            <div>
              {" "}
              <Card sx={{ maxWidth: 345 }} className="projects-card">
                <CardMedia component="img" height="350" image={me} />
              </Card>
            </div>
          </Carousel>
          ;
        </div>
      </div>
    </div>
  );
};

export default About;
