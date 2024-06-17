import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const About = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="container">
        <div className="about-contents">
          <div className="about-element">
            <div className="about-left">
              {/* <div class="left">
                <div class="box">
                  <h3 class="year">3.5</h3>
                  <span class="experience">Years of Experience</span>
                  <h3 class="name">Bijina Regmi</h3>
                </div>
              </div> */}
            </div>
            <div className="about-right">
              <h3>About Me</h3>
              <p>
                With 3.5 years experience as a professional UI/UX Designer, I
                have acquired the skills and knowledge necessary to make your
                project a success. I enjoy every step of the design process,
                from discussion and collaboration.
              </p>
            </div>
          </div>
          <div className="experience-section">
            <div className="informations-inner">
              <div className="experience-left">
                <div className="experience-title">
                  <h3>
                    <span>
                      My expert
                      <br></br>areas
                    </span>
                  </h3>
                </div>
                <div className="experience-text">
                  <p>
                    You can express yourself however you want and whenever you
                    want, for free. You can customize a template or make your
                    own from scratch, with an immersive library at your
                    disposal. You can express yourself however you want and
                    whenever you free.
                  </p>
                  <p>
                    You can customize a template or make your own from scratch,
                    with an immersive library at your disposal.
                  </p>
                </div>

                <div className="experience-button">
                  <button type="button" className="btn btn-primary">
                    <FontAwesomeIcon icon={faFile} />
                    Resume
                  </button>
                </div>
              </div>
              <div className="experience-right">
                <div className="tabs">
                  <Box sx={{ width: "100%" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      textColor="secondary"
                      indicatorColor="secondary"
                      aria-label="secondary tabs example"
                    >
                      <Tab value="one" label="Skills" />
                      <Tab value="two" label="Experience" />
                      <Tab value="three" label="Education" />
                    </Tabs>
                    {value === "one" && (
                      <Box sx={{ p: 3 }}>
                        <div className="skillBox">
                          <ul>
                            <li>
                              <div className="skill-figma">
                                <span className="figma-icon">
                                  <span className="icon-inner">
                                    <FontAwesomeIcon icon={faFile} />
                                  </span>
                                </span>
                                <p class="icon-desc">
                                  Figma <span>(90%)</span>
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="skill-figma">
                                <span className="figma-icon">
                                  <span className="icon-inner">
                                    <FontAwesomeIcon icon={faFile} />
                                  </span>
                                </span>
                                <p class="icon-desc">
                                  Figma <span>(90%)</span>
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="skill-figma">
                                <span className="figma-icon">
                                  <span className="icon-inner">
                                    <FontAwesomeIcon icon={faFile} />
                                  </span>
                                </span>
                                <p class="icon-desc">
                                  Figma <span>(90%)</span>
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="skill-figma">
                                <span className="figma-icon">
                                  <span className="icon-inner">
                                    <FontAwesomeIcon icon={faFile} />
                                  </span>
                                </span>
                                <p class="icon-desc">
                                  Figma <span>(90%)</span>
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="skill-figma">
                                <span className="figma-icon">
                                  <span className="icon-inner">
                                    <FontAwesomeIcon icon={faFile} />
                                  </span>
                                </span>
                                <p class="icon-desc">
                                  Figma <span>(90%)</span>
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="skill-figma">
                                <span className="figma-icon">
                                  <span className="icon-inner">
                                    <FontAwesomeIcon icon={faFile} />
                                  </span>
                                </span>
                                <p class="icon-desc">
                                  Figma <span>(90%)</span>
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </Box>
                    )}
                    {value === "two" && (
                      <Box sx={{ p: 3 }}>
                        <Typography>Content for Tab Two</Typography>
                      </Box>
                    )}
                    {value === "three" && (
                      <Box sx={{ p: 3 }}>
                        <Typography>Content for Tab Three</Typography>
                      </Box>
                    )}
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
