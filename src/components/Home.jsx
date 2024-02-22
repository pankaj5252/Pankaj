import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = (prop) => {
  console.log(prop)
  return (
    <>
      {/* Home Page  */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <span className="Star1">&#9733;</span>
            <section id="hero" className="d-flex align-items-center">
              <div
                className="container d-flex flex-column align-items-center zoom-in animated-element-home"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <h1 className="name">Hey! I'm Pankaj Kale</h1>
                <h2>I'm a Full Stack Developer</h2>
                <Link
                  to="/about"
                  className="relative btn-about py-2 px-8 text-base font-bold nded-full overflow-hidden bg-red text-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-600 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
                >
                  About Me
                </Link>
              </div>
            </section>
          </div>
          <div className="col-md-6 p-0 text-center">
            <span className="Star">&#9733;</span>
            <span className="Star2">&#9733;</span>
            <span className="Star3">&#9733;</span>
            <LazyLoadImage
              className="boyImg"
              alt=""
              src={prop.data} // use normal <img> attributes as props
            />
            {/* <img src="assets/boy1.png" className="boyImg" alt="" /> */}
          </div>
        </div>
      </div>

      {/* About page */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center">
            <h2 className="titlefont font-weight-bold">About</h2>
            <p>
              Hello, I'm Pankaj Kale, a passionate and experienced Full Stack
              Web Developer with a focus on creating robust and user-friendly
              web applications. My journey in web development began during my
              College and web development classes at A2Z Infotech
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 text-center animated-element">
              <LazyLoadImage
                className="img-fluid rounded-lg"
                alt=""
                src={prop.pk} // use normal <img> attributes as props
              />
              {/* <img className="img-fluid rounded-lg" src={prop.data} alt="" /> */}
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content animated-element1">
              <h3>Full Stack Developer &amp; UI/UX Designer</h3>
              <p className="fst-italic">
                As a Full Stack Developer, I have honed my skills in both
                front-end and back-end technologies.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Birthday:</strong> 25 May 20020
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Website:</strong> https://www.pankajkale.tech
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Phone:</strong> +91 9021373247
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>City:</strong> Ahmednagar, Maharashtra, India
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Age:</strong> 21
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Degree:</strong> Bachelor's
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Email:</strong> pbkale25@gmail.com
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Freelance:</strong> Available
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                As a team player, I thrive in collaborative environments where
                diverse skills come together to solve complex challenges. I
                enjoy working closely with cross-functional teams, including
                designers, product managers, and fellow developers, to deliver
                exceptional results. As a<strong> Full Stack Developer</strong>,
                I am deeply passionate about building cutting-edge applications
                that blend innovation and user satisfaction. I am excited to
                bring my skills and enthusiasm to a team that values creativity,
                teamwork, and a dedication to excellence.
              </p>
              {/* <div className="text-center">
                <NavLink
                  to="/resume"
                  className="relative btn-about py-2 px-8 text-base font-bold nded-full overflow-hidden bg-red text-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-600 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
                >
                  Resume
                </NavLink>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services page */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <section id="services" className="services p-3">
              <div className="container" data-aos="fade-up">
                <div className="section-title text-center">
                  <h2 className="titlefont">Services</h2>
                  <p>
                    Magnam dolores commodi suscipit. Necessitatibus eius
                    consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                    velit. Quisquam quos quisquam cupiditate. Et nemo qui
                    impedit suscipit alias ea. Quia fugiat sit in iste officiis
                    commodi quidem hic quas.
                  </p>
                </div>

                <div className="row">
                  <div
                    className="col-lg-4 col-md-6 d-flex align-items-stretch"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <div className="icon-box bg-transparent rounded-lg iconbox-blue">
                      <div className="icon">
                        <svg
                          width="100"
                          height="100"
                          viewBox="0 0 600 600"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke="none"
                            stroke-width="5"
                            fill="#f5f5f5"
                            d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                          ></path>
                        </svg>
                        <i className="fa-solid fa-gear"></i>
                      </div>
                      <h4>
                        <NavLink>Web Application Development</NavLink>
                      </h4>
                      <p>
                        {" "}
                        This involves both front-end development (designing user
                        interfaces, implementing user interactions, etc.) and
                        back-end development (server-side logic, database
                        management, etc.)
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <div className="icon-box bg-transparent rounded-lg iconbox-orange ">
                      <div className="icon">
                        <svg
                          width="100"
                          height="100"
                          viewBox="0 0 600 600"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke="none"
                            stroke-width="0"
                            fill="#f5f5f5"
                            d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
                          ></path>
                        </svg>
                        <i className="fa-solid fa-user-secret"></i>
                      </div>
                      <h4>
                        <NavLink>Front-End Development</NavLink>
                      </h4>
                      <p>
                        Work with HTML, CSS, and JavaScript to create responsive
                        and visually appealing interfaces that provide an
                        excellent user experience.{" "}
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <div className="icon-box bg-transparent rounded-lg iconbox-pink">
                      <div className="icon">
                        <svg
                          width="100"
                          height="100"
                          viewBox="0 0 600 600"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke="none"
                            stroke-width="0"
                            fill="#f5f5f5"
                            d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
                          ></path>
                        </svg>
                        <i className="fa-solid fa-gear"></i>
                      </div>
                      <h4>
                        <NavLink>Back-End Development</NavLink>
                      </h4>
                      <p>
                        Have expertise in server-side programming languages
                        (e.g., Python, Node.js, Java, Ruby, PHP) and frameworks
                        to handle data, server logic, and integration with
                        databases and external APIs.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <div className="icon-box bg-transparent rounded-lg iconbox-yellow">
                      <div className="icon">
                        <svg
                          width="100"
                          height="100"
                          viewBox="0 0 600 600"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke="none"
                            stroke-width="0"
                            fill="#f5f5f5"
                            d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"
                          ></path>
                        </svg>
                        <i className="fa-solid fa-database"></i>
                      </div>
                      <h4>
                        <NavLink>Database Design and Management</NavLink>
                      </h4>
                      <p>
                        design and optimize databases to store and manage
                        application data efficiently & work with various
                        database systems such as MySQL, PostgreSQL, MongoDB,
                        etc.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <div className="icon-box bg-transparent rounded-lg iconbox-red">
                      <div className="icon">
                        <svg
                          width="100"
                          height="100"
                          viewBox="0 0 600 600"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke="none"
                            stroke-width="0"
                            fill="#f5f5f5"
                            d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"
                          ></path>
                        </svg>
                        <i className="fa-solid fa-file-code"></i>
                      </div>
                      <h4>
                        <NavLink>API Development and Integration</NavLink>
                      </h4>
                      <p>
                        create and integrate Application Programming Interfaces
                        (APIs) to facilitate communication between different
                        software components or third-party services.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <div className="icon-box bg-transparent rounded-lg iconbox-teal">
                      <div className="icon">
                        <svg
                          width="100"
                          height="100"
                          viewBox="0 0 600 600"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke="none"
                            stroke-width="0"
                            fill="#f5f5f5"
                            d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"
                          ></path>
                        </svg>
                        <i className="fa-solid fa-bars"></i>
                      </div>
                      <h4>
                        <NavLink href="">
                          Project Management and Collaboration
                        </NavLink>
                      </h4>
                      <p>
                        Take on project management roles, coordinating with
                        clients, designers, and other team members to ensure
                        projects are delivered on time and within budget.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Resume page */}
      <section id="resume" className="resume p-2">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center">
            <h2 className="titlefont">Resume</h2>
            <p>
              Highly skilled and motivated professional with a demonstrated
              track record of success in software development. As a software
              developer, I bring 1 year of experience and specialized expertise
              in designing. I am a proactive problem solver with a keen eye for
              detail, fully committed to delivering top-notch results and
              contributing to the growth of the organization.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0 animated-element">
                <h4>Pankaj Bapusaheb Kale</h4>
                <p>
                  <em>
                    As a Full Stack Developer, I aim to bring my creative
                    problem-solving abilities, attention to detail, and
                    experience in delivering outstanding visual experiences to
                    the development process.
                  </em>
                </p>
                <ul>
                  <li>Kautha Newasa Ahmedngar 414606</li>
                  <li>9021373247</li>
                  <li>pbkale25@gmail.com</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item animated-element">
                <h4>Master of Computer Applications (MCA)</h4>
                <h5>2023 - 2025</h5>
                <p>
                  <em>Savitribai phule pune university</em>
                </p>
                <p>Siddhant Institute of Computer Application,Pune</p>
                <p>Appearing</p>
              </div>
              <div className="resume-item animated-element">
                <h4>Bachelor of Computer Applications (Sci)</h4>
                <h5>2021 - 2023</h5>
                <p>
                  <em>Savitribai phule pune university</em>
                </p>
                <p>New arts commerce and science college,Ahmednagar</p>
                <p>75%</p>
              </div>
              <div className="resume-item animated-element">
                <h4>Higher Secondary Certificate (HSC)</h4>
                <h5>2019 - 2020</h5>
                <p>
                  <em>
                    Maharashtra State Board of Secondary & Higher Secondary
                  </em>
                </p>
                <p>New arts commerce and science college , Ahmednagar</p>
                <p>55%</p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item animated-element1">
                <h4>Full Stack Web Developer</h4>
                <h5>2023 - Present</h5>
                <p>
                  <em>A2Z INFOTECH PVT.LTD Ahmednagar</em>
                </p>
                <ul>
                  <li>
                    Lead in the design, development, and implementation of the
                    graphic, layout, and production communication materials
                  </li>
                  <li>
                    Delegate tasks to the 7 members of the design team and
                    provide counsel on all aspects of the project.
                  </li>
                </ul>
              </div>
              <h3 className="resume-title">Project's</h3>
              <div className="resume-item animated-element1">
                <h4>1-Flixcom Movies & TV Shows (Angular)</h4>
                <p>
                  <em>
                    Technologies -TMDB API , Angular, JavaScript , BOOTSTRAP
                    ,CSS , HTML
                  </em>
                </p>
                <p>
                  Click here :-{" "}
                  <Link to="https://flixcomshow.netlify.app/">Live Demo</Link>
                </p>
              </div>
              <div className="resume-item animated-element1">
                <h4>2- E-Commerce (Angular)</h4>
                <p>
                  <em>
                    Technologies -Angular, JavaScript , BOOTSTRAP ,CSS , HTML
                  </em>
                </p>
                <p>
                  Click here :-{" "}
                  <Link to="https://ecomprojectbypankaj.netlify.app/">
                    Live Demo
                  </Link>
                </p>
              </div>
              <div className="resume-item animated-element1">
                <h4>3-Personal Portfolio (Angular)</h4>
                <p>
                  <em>
                    Technologies -Angular, JavaScript , BOOTSTRAP ,CSS , HTML
                  </em>
                </p>
                <p>
                  Click here :-{" "}
                  <Link to="https://kalepankaj.netlify.app/">Live Demo</Link>
                </p>
              </div>
              <div className="resume-item animated-element1">
                <h4>4- Restaurants Manages (Angular)</h4>
                <p>
                  <em>
                    Technologies -:Angular, NodeJs,express js , API , MySQL
                    ,JavaScript , BOOTSTRAP , CSS , HTML
                  </em>
                </p>
              </div>
              <div className="resume-item animated-element1">
                <h4>5- PANKAJ KALE PHOTOGRAPHY:</h4>
                <p>
                  <em>Technologies -:PHP , JavaScript ,BOOTSTRAP , HTML</em>
                </p>
                <p>
                  Click here :-{" "}
                  <Link to="https://pankajkalephotographyy.000webhostapp.com/">
                    Live Demo
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-lg-12 pb-3  animated-element3">
              <h3 className="resume-title text-center">Skill's</h3>
              <div className="card shadow" style={{ width: 150, height: 150 }}>
                <img className="card-img-top" alt="A" src="/assets/react.png" />
              </div>
              <div className="card shadow" style={{ width: 150, height: 150 }}>
                <img className="card-img-top" alt="A" src="/assets/node.png" />
              </div>
              <div className="card shadow" style={{ width: 150, height: 150 }}>
                <img className="card-img-top" alt="A" src="/assets/mango.png" />
              </div>
              <div className="card shadow" style={{ width: 150, height: 150 }}>
                <img className="card-img-top" alt="A" src="/assets/api.png" />
              </div>
              <div className="card shadow" style={{ width: 150, height: 150 }}>
                <img className="card-img-top" alt="A" src="/assets/sql.png" />
              </div>
              <div className="card shadow" style={{ width: 150, height: 150 }}>
                <img
                  className="card-img-top  p-2 mt-4"
                  alt="A"
                  src="/assets/js.png"
                />
              </div>
              <div className="card shadow" style={{ width: 150, height: 150 }}>
                <img
                  className="card-img-top mt-3"
                  alt="A"
                  src="/assets/tailwind.png"
                />
              </div>
              <div className="card shadow" style={{ width: 150, height: 150 }}>
                <img className="card-img-top" alt="A" src="/assets/html.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact page */}
      <section id="contact" className="contact p-3">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center">
            <h2 className="titlefont">Contact</h2>
            <p>
              Welcome to our contact page! We value your feedback, inquiries,
              and suggestions. Whether you have a question about our products or
              services, need technical support, or want to share your thoughts
              with us, we're here to listen.
            </p>
          </div>
          <div></div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i class="fa-solid fa-location-dot"></i>
                  <h4>Location:</h4>
                  <p>Kautha Newasa Ahmednagar 414606</p>
                </div>
                <div className="email">
                  <i class="fa-solid fa-envelope"></i>
                  <h4>Email:</h4>
                  <p>pbkale25@gamil.com</p>
                </div>
                <div className="phone">
                  <i class="fa-solid fa-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 9021373247</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form method="post" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control bg-transparent"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control bg-transparent"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control bg-transparent"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control bg-transparent"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-about mt-0">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
