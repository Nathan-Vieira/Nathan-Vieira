//bowToWow
import BowCardImg from "./BowToWow/card.png";
import BowCardImgSmall from "./BowToWow/cardSmall.png";
import BowBannerImg from "./BowToWow/background.png";
import UserFlowImg from "./BowToWow/userFlow.png";
import HomeImg from "./BowToWow/homeScreen.png";
import AddBookingImg from "./BowToWow/addBooking.png";
import ViewBookingImg from "./BowToWow/viewBooking.png";
import ContactsImg from "./BowToWow/contacts.png";
import AnalyticsImg from "./BowToWow/analytics.png";
import BackgroundImg from "./BowToWow/background.png";
//Hopsckotch
import HopCardImg from "./HopSkotch/card.PNG";
import HopCardImgSmall from "./HopSkotch/cardSmall.PNG";
import HopBannerImg from "./HopSkotch/banner.PNG";
import HopBackgroundImg from "./HopSkotch/background3.jpg";
import HighFidelity01 from "./HopSkotch/highFidelity01.PNG";
import HighFidelity02 from "./HopSkotch/highFidelity02.PNG";
//ProblemAnal
import ProbCardImg from "./ProblemAnalysis/card.PNG";
import ProbCardImgSmall from "./ProblemAnalysis/cardSmall.PNG";
import ProbBannerImg from "./ProblemAnalysis/banner.PNG";
import ProbHighFidelity01 from "./ProblemAnalysis/highFidelity01.png";
import ProbHighFidelity02 from "./ProblemAnalysis/highFidelity02.png";
import ProbHighFidelity03 from "./ProblemAnalysis/highFidelity03.png";
import ProbHighFidelity04 from "./ProblemAnalysis/highFidelity04.png";

const myStyling = {
  // maxHeight: "2500px",
};
export const researchProjectsData = [
  {
    id: 1,
    name: "Bow to the Wow pet grooming",
    link: "asd.com",
    backgroundImage: null,
    color01: "rgb(254, 198, 142)",
    color02: "rgb(246, 114, 162)",
    cardTitleTxtColor: "rgb(40, 40, 40)",
    smallCardTitleTxtColor: "rgb(40, 40, 40)",

    pageTitleTxtColor: "rgb(40, 40, 40)",
    descTxtColor: "rgb(245, 245, 245)",
    cardImg: BowCardImg,
    cardImgSmall: BowCardImgSmall,
    bannerImg: BowBannerImg,
    desc: "UX/UI",
    about: (
      <p>
        appointment, client manager
        <br />
        <br />
        project earnings, insights
      </p>
    ),
    overView: (
      <div>
        <h1>BowToTheWow</h1>
        <hr />
        <p>
          This application allows users to manage their appointments with ease
          by providing tools to view, modify, and cancel bookings.
          <br />
          <br />
          Users can also store and update contact information, making client
          management seamless.
          <br />
          <br />
          Additionally, the app calculates and displays projected earnings based
          on the existing bookings, giving users a clear insight into their
          potential revenue.
        </p>
      </div>
    ),
    finalThoughts: (
      <p>
        Throughout this project, I’ve gained some insight and recognized areas
        for improvement.
        <br />
        I realize that my initial plan lacked the necessary robustness. I need
        to focus on some improvements when I take on some more:
        <br />
        <ul>
          <li>
            Develop a more precise user flow with accompanying wireframes to
            ensure all functionalities are clearly mapped out.
          </li>
          <br />
          <li>
            Address missing features, such as the ability to edit and remove
            bookings.
          </li>
          <br />

          <li>
            Incorporate functionalities for editing and removing contacts.
          </li>
        </ul>
        Some cruicial functionallity was overlooked by myslef. these lessons
        will help to enhance the overall effectiveness and completeness of other
        projects.
      </p>
    ),
    media: [
      {
        src: <img style={{ maxHeight: "550px" }} src={UserFlowImg} alt="" />,
        description: (
          <div>
            <h1>user flow</h1>
            <hr />
            <p>
              The app’s user flow is designed with simplicity in mind.
              <br />
              <br />
              Users are able to have a comprehensive overview of the current
              state of their business, with access to all functions of the
              application at all times. this streamlined appointment management
              enhances your ability to make business decisions
            </p>
          </div>
        ),
      },
      {
        src: <img src={HomeImg} alt="" />,
        description: (
          <div>
            <h1>your snapshot</h1>
            <hr />
            <p>
              Users are greeted with an organized dashboard where they can see
              all upcoming appointments at a glance.
              <br />
              <br />
              With just a few clicks, they can modify bookings or view detailed
              client information along with all scheduled events. The projected
              earnings section provides clear insights into expected income,
              empowering users to plan their schedule effectively.
            </p>
          </div>
        ),
      },
      {
        src: <img style={myStyling} src={AddBookingImg} alt="" />,
        description: (
          <div>
            <h1>detailed appointments</h1>
            <hr />
            <p>
              Users can schedule appointments by adding a new customer and their
              dog for a specified date.
              <br />
              <br />
              Additionally, they can provide detailed notes to assist with
              appointment preparation, along with key information like the
              customer's contact number, address, and the dog's name and breed.
            </p>
          </div>
        ),
      },
      {
        src: <img style={myStyling} src={ViewBookingImg} alt="" />,
        description: (
          <div>
            <h1>track events</h1>
            <hr />
            <p>
              Users can easily view upcoming events for any selected month, with
              real-time status updates to reflect whether the event has passed.
              This feature ensures accurate tracking and helps users stay
              organized with their scheduled appointments.
            </p>
          </div>
        ),
      },
      {
        src: <img style={myStyling} src={ContactsImg} alt="" />,
        description: (
          <div>
            <h1>maintain control</h1>
            <hr />
            <p>
              Users can efficiently manage and update their contact list while
              staying informed about upcoming appointments through timely
              reminders. This ensures seamless communication and organization,
              providing an optimized experience for both users and clients.
            </p>
          </div>
        ),
      },
      {
        src: <img style={myStyling} src={AnalyticsImg} alt="" />,
        description: (
          <div>
            <h1>reach your goals</h1>
            <hr />
            <p>
              Users can view a snapshot of the business's earnings for a given
              month, comparing current bookings with those from the previous
              month for a clear overview of financial performance.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    id: 2,
    name: "HopSkotch Tech",
    link: "asd.com",
    backgroundImage: HopBackgroundImg,
    color01: "rgb(105, 174, 250)",
    color02: "rgb(76,153,237)",
    cardTitleTxtColor: "rgb(40, 40, 40)",
    smallCardTitleTxtColor: "rgb(40, 40, 40)",

    descTxtColor: "rgb(245, 245, 245)",
    cardImg: HopCardImg,
    cardImgSmall: HopCardImgSmall,
    bannerImg: HopBannerImg,
    desc: "UX/UI",
    about: (
      <p>
        smart devices for children
        <br />
        <br />
        software for enhanced experiences
        <br />
      </p>
    ),
    overView: (
      <div>
        <h1>HopSkotch Tech</h1>
        <hr />
        <br />
        <p>
          The organization aims to provide smart devices and technology access
          to children from low-income families, developing software to enhance
          their tech experience. Their services will include an educational
          social media platform, workshops, and events focused on computer
          technology.
        </p>
        <p>
          Additionally, the website will facilitate multiple donation methods,
          including used and new devices, data plans, instructional materials,
          and monetary contributions. Volunteers will also be able to offer
          their time for administrative tasks. The client seeks user-friendly
          software with an inviting interface, ensuring all functions are
          intuitive and information is easily accessible
        </p>
      </div>
    ),
    finalThoughts: (
      <p>
        My exploration and analysis of these design elements have given me a
        deeper understanding of the user experience. Designing for a specific
        audience—whether it's children, low-tech users, or individuals with
        accessibility needs requires thoughtful consideration of both
        functionality and aesthetics.
        <br />
        <br />
        The importance of high contrast, clear navigation, and simple language
        has become evident, as these elements ensure that a website is easy to
        use and accessible to all users. Additionally, by studying the success
        of platforms like Toys R Us, I’ve learned the value of incorporating
        engaging, interactive design features such as large buttons, vibrant
        colors, and feedback mechanisms. These not only improve usability but
        also enhance user satisfaction.
        <br />
        <br />
        Moving forward, I now have a more refined approach to balancing creative
        design with accessibility, making sure that a website isn’t just
        visually appealing but also intuitive and user-friendly. This experience
        has reinforced the necessity of designing with empathy, focusing on how
        users will engage with and navigate the interface.
      </p>
    ),
    media: [
      {
        src: null,
        description: (
          <p>
            <strong>General Design</strong>
            <br />
            The design will draw significant influence from Toys R Us, which
            employs various techniques tailored for a younger audience. Bright
            colors, large buttons, and clear, straightforward information on
            navigation links are key elements.
            <br />
            <br />
            <strong>Usability</strong>
            <br />
            Toys R Us sets a high standard for usability. On their landing page,
            nearly every element provides feedback upon interaction, with only
            two buttons lacking this feature. The website's use of bright colors
            and large, bold fonts ensures clear visibility and functionality
            throughout, making it highly accessible for users.
          </p>
        ),
      },
      {
        src: null,
        description: (
          <p>
            <strong>Navigability and Panels</strong>
            <br />
            The website's landing page will feature a banner as the primary
            navigation tool, designed to accommodate both children and users
            with disabilities who rely on keyboard-only navigation. This ensures
            an accessible and straightforward user experience.
            <br />
            <br />
            <strong>Scheduled Events Page</strong>
            <br />
            A sliding image feature, inspired by Toys R Us, will prominently
            display upcoming events on a large panel, serving as the focal point
            to engage visitors and drive interest upon arrival.
            <br />
            <br />
            <strong>Donate and Volunteer</strong>
            <br />
            The "Donate" button will direct users to a page listing various
            donation options (devices, data plans, materials, monetary), each
            linking to specific instructions for contributing. The "Volunteer
            Now" button will take users to a signup page, where they can
            register using their email to receive information and confirm their
            identity when volunteering onsite.
            <br />
            <br />
            <strong>Personalized Home Page</strong>
            <br />
            Once logged in, users' homepages will be personalized, displaying
            their name and linking to a personal events page, where they can
            view a list of their upcoming scheduled events, including dates and
            times.
            <br />
            <br />
            <strong>Additional Information</strong>
            <br />
            The footer will include essential company information such as
            location and contact numbers, along with links to key website
            controls for easy access.
          </p>
        ),
      },
      {
        src: null,
        description: (
          <div>
            <h1>Accessibility Considerations</h1>
            <hr />
            <p>
              Many usability techniques similar to Toys R Us are to be
              implemented in my own designs. Understanding the importance of
              good accessibility for the target market is crucial. I believe
              large buttons with vibrant colors, large fonts, and a limited
              presentation of information are among the most important
              considerations. Below is a checklist of WCAG guidelines that I
              interpret as good practices.
            </p>
            <p>
              Simple designs will enable me, as the designer, to easily
              implement a variety of WCAG guidelines:
            </p>

            <ul>
              <li>
                <strong>Alternate text for images:</strong> All images will
                include alternative text for screen readers to ensure that users
                with low vision can understand the content of the page.
              </li>
              <li>
                <strong>Simple keyboard navigation:</strong> This is a must-have
                for any website concerned with accessibility. Users will be able
                to navigate the site easily using only their keyboard.
              </li>
              <li>
                <strong>On focus feedback:</strong> Keyboard users will receive
                the same feedback (e.g., hover effects) when selecting elements,
                as if using a mouse to hover over buttons or links.
              </li>
              <li>
                <strong>Medium to high contrast:</strong> High contrast for
                low-vision users is essential for a user-friendly experience.
                Color choices will prioritize ease of readability and
                accessibility.
              </li>
              <li>
                <strong>Low reading level language:</strong> Since children will
                use this website, content will be presented in simple,
                easy-to-understand language across all pages.
              </li>
              <li>
                <strong>Consistent navigation:</strong> A navigation bar will
                serve as the primary method for moving through the site,
                ensuring consistency and ease of use.
              </li>
            </ul>
          </div>
        ),
      },
      {
        src: <img style={{ maxHeight: "450px" }} src={HighFidelity01} alt="" />,
        description: (
          <p>
            <strong>Design factors</strong>
            <br />
            The website's design will be influenced by various factors,
            including the age range of users, current trends in children's
            websites, and imagery of local and recognizable establishments such
            as libraries, schools, or playgrounds.
            <br />
            <br />A design similar to Toys R Us will serve as a primary
            influence. Toys R Us incorporates several techniques to appeal to
            children, such as bright colors, large buttons, and simple,
            straightforward information on their links to other pages.
          </p>
        ),
      },
      {
        src: <img style={{ maxHeight: "450px" }} src={HighFidelity02} alt="" />,
        description: (
          <p>
            <strong>Medium to high contrast</strong>
            <br />
            High contrast for users with low visibility is essential to ensure
            an easily navigable website. The selection of colors was
            specifically chosen with this need in mind.
            <br />
            <br />
            <strong>Low reading level language</strong>
            <br />
            As children will be the primary users, simple and easy-to-understand
            language will be employed across all pages to cater to their needs.
            <br />
            <br />
            <strong>Consistent navigation</strong>
            <br />A navigation bar will be included as the main method of
            navigating the site, ensuring a user-friendly and consistent
            experience.
          </p>
        ),
      },
      {
        src: null,
        description: (
          <p>
            <strong>Target market</strong>
            <br />
            This software is primarily designed for children with limited
            exposure to technology, as well as individuals looking to donate to
            the organization. It is tailored to accommodate the needs of young,
            inexperienced users, focusing on an age range of 5 to 18, with the
            majority expected to fall within the younger half of this group.
          </p>
        ),
      },
    ],
  },
  {
    id: 3,
    name: "Problem Analysis",
    link: "asd.com",
    backgroundImage: HopBackgroundImg,
    color01: "rgb(105, 174, 250)",
    color02: "rgb(76,153,237)",
    cardTitleTxtColor: "rgb(245, 245, 245)",
    descTxtColor: "rgb(245, 245, 245)",
    smallCardTitleTxtColor: "rgb(40, 40, 40)",
    pageTitleTxtColor: "rgb(245, 245, 245)",
    cardImg: ProbCardImg,
    cardImgSmall: ProbCardImgSmall,
    bannerImg: null,
    desc: "Smart vehicle safety",
    about: (
      <div>
        <p>smart vehicles</p>
        <p>system safety</p>
      </div>
    ),
    overView: (
      <div>
        <h1>Emerging technologies</h1>
        <hr />
        <p>
          Smart systems for vehicles able to communicate with other users and
          surroundings.
          <br />
          For those who drive and are interested in the fast growing technology
          to better ensure their safety and experience.
          <br />
          <p>
            Most would love an idea to buy a smart car. However, some of them
            still don’t trust smart systems, some are not ready to pay more for
            them and only half of people prefer electric cars. Most
            participants, who drive don’t use smart devices while driving, and
            most think that smart cars are too expensive.
          </p>
        </p>
      </div>
    ),
    finalThoughts: (
      <p>
        Working on this research project has been an eye-opening experience into
        the intersection of smart vehicle technology and user perceptions.
        <br />
        <br />
        The data collected from participants provided key insights into both the
        excitement and skepticism surrounding smart systems in cars. While
        features such as autopilot, vehicle awareness, and entertainment systems
        have garnered significant interest, concerns about privacy, trust in
        automation, and the high cost of smart vehicles remain barriers to wider
        adoption. Despite these concerns, the majority of participants expressed
        optimism about the future of smart cars, especially with the potential
        for government incentives and further advancements in safety technology.
        <br />
        <br />
        The study also highlighted the importance of providing reliable GPS
        systems, instant traffic updates, and the ability to communicate with
        other vehicles and users, all of which are seen as essential for
        enhancing the driving experience. This project reinforced the importance
        of balancing cutting-edge features with user trust and affordability.
        <br />
        <br />
        As smart vehicle technology continues to evolve, addressing these pain
        points will be crucial in building a future where smart cars are not
        only embraced but become the standard for safer, more efficient travel.
      </p>
    ),
    media: [
      {
        src: null,
        description: (
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <strong>Analysis and Statement</strong>
            <br />
            <br />
            <p>Total number of participants: 19</p>
            <p>Participants, who drive: 10</p>
            <p> Average age(70% of participants): 16-21</p>
            <br />
            <ul>
              <li>
                6 participants out of 10 don’t use mobile device that much,
                while driving.
              </li>
              <li>3 out of 10 people use GPS a often.</li>
              <li>70% of all participants live in urban areas.</li>
              <li>
                Almost 50% of all participants prefer electric car over gas,
                diesel or hybrid.
              </li>
              <li>All participants have been in 0-3 car accidents.</li>
              <li>
                30% of all participants expressed the highest interest in smart
                vehicles(5 out of 5),
              </li>
              <li>
                30% expressed high interest in smart vehicles as well(4 out of
                5).
              </li>
              <li>5% expressed the lowest interest(1 out of 5).</li>
              <li>
                84% of people are ready to pay more for smart features in their
                cars.
              </li>
              <li>Almost 90% of participants trust smart systems.</li>
              <li>
                Almost 70% will allow system to access their personal data.
              </li>
              <li>
                84% would love the idea to interact with other road users.
              </li>
              <li>
                All participants will consider buying a smart car more, if the
                government would provide a rebate program.
              </li>
            </ul>
            <p>
              Some participants were highly interested in the entertainment side
              of the mart vehicle, while others were interested in ideas such as
              self-driving and vehicle awareness. All users seemed excited
              however about the idea of owning a smart vehicle, and under the
              right circumstances and security tests, could see themselves
              owning one someday.
              <br />
              <br />
              All contestants were very high on the idea of receiving instant
              traffic updates and allowing all passengers to operate the smart
              system. Despite all enjoying the idea of self-driving, all
              participants would still like at least some control over driving
              the vehicle. Overall, it seems that all the passengers are
              currently, or could someday in the future, be optimistic on owning
              a smart vehicle.
            </p>
            <div>
              <strong>Problems:</strong>
              <br />
              <p>
                People don’t trust smart system Smart Cars are too expensive in
                comparison with regular cars Users are not used to smart
                systems.
              </p>
            </div>
          </div>
        ),
      },
      {
        src: null,
        description: (
          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              // paddingRight: "150px",
            }}
          >
            <strong>Needs</strong>
            <ul>
              <li>A tool to track highway travel costs</li>
              <li>A reliable GPS system</li>
              <li>Warning systems and tools</li>
            </ul>
            <strong>Pain Points</strong>
            <ul>
              <li>Loss of connection</li>
              <li>Misunderstanding directions</li>
              <li>Declining driving skills</li>
              <li>Privacy issues</li>
              <li>Data theft</li>
            </ul>
            <strong>Must Haves</strong>
            <ul>
              <li>Autopilot and parking assistance</li>
              <li>Voice control</li>
              <li>Crash awareness/auto braking</li>
              <li>Connectivity and communication</li>
              <li>Access to internet applications</li>
              <li>Traffic and infrastructure updates</li>
              <li>Instant traffic updates</li>
              <li>Music connectivity</li>
            </ul>
            <p>
              Drivers need reliable GPS systems, tools to track travel costs,
              and safety features like warning systems. Pain points include
              losing connection to smart vehicles, privacy issues, and declining
              driving skills. Must-have features encompass advanced technologies
              such as autopilot, crash awareness, voice control, and instant
              traffic updates, along with seamless internet and music
              connectivity.
            </p>
          </div>
        ),
      },
      {
        src: (
          <img style={{ maxHeight: "450px" }} src={ProbHighFidelity01} alt="" />
        ),
        description: (
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <strong>Home Screen</strong>
            <p></p>
            <ul>
              <li>Prompts user’s name</li>
              <li>Requests destination</li>
              <li>Displays vehicle status</li>
              <li>Navigation screen</li>
            </ul>
            <p>
              The home screen is displayed when the user starts the car or comes
              within range of the vehicle with the key fob. The system
              identifies the specific key fob and automatically loads the
              settings for the authorized driver.
              <br />
              <br />
              After starting, the user is prompted to set a destination via the
              navigation system. Whether the user selects yes or no, the map
              screen remains active as an idle display until the driving mode is
              changed.
              <br />
              <br />
              The home screen also provides real-time information on the
              vehicle’s current status, including gas levels, battery life, and
              tire wear, all shown on the left side of the screen, overlapping
              with the navigation map.
            </p>
          </div>
        ),
      },
      {
        src: (
          <img style={{ maxHeight: "450px" }} src={ProbHighFidelity02} alt="" />
        ),
        description: (
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <strong>Map Screen</strong>
            <ul>
              <li>Map and Search Bar</li>
              <li>Requests destination</li>
              <li>Shows car details on sidebar</li>
            </ul>
            <p>
              The Maps screen is displayed when the user taps the rightmost icon
              on the control banner, or after responding “yes” or “no” on the
              home screen. If the user selects “no,” the map screen appears
              without a set destination, and the search window opens, allowing
              the user to either type a destination or choose from suggested
              options below the search bar.
            </p>
          </div>
        ),
      },
      {
        src: (
          <img style={{ maxHeight: "450px" }} src={ProbHighFidelity03} alt="" />
        ),

        description: (
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <strong>Call Screen</strong>
            <ul>
              <li>Contact list synchronized with phone</li>
              <li>Compressed map view</li>
              <li>Displays driving information</li>
            </ul>
            <p>
              The Call screen is displayed when the user taps the leftmost icon,
              the telephone. The user can scroll through their contacts, which
              are synchronized with their phone. The Maps screen will be
              compressed to the right, allowing the user to maintain visibility
              while making a call.
              <br />
              <br />
              Additional driving information, such as distance traveled,
              temperature, and elapsed travel time, will also be shown,
              mimicking the display in drive mode.
            </p>
          </div>
        ),
      },
      {
        src: (
          <img style={{ maxHeight: "450px" }} src={ProbHighFidelity04} alt="" />
        ),
        description: (
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <strong>Drive Screen</strong>
            <ul>
              <li>Vehicle status icons</li>
              <li>Music controls</li>
              <li>Car model display</li>
            </ul>
            <p>
              The Drive screen is displayed while driving or when the user taps
              the second icon on the control banner, the car icon. The icons
              from the home screen will appear on top of the car model on the
              left side of the screen, continuously updating the user on vehicle
              status such as battery life, gas tank levels, and tire condition.
              <br />
              <br />
              Above these icons, music controls will be available, allowing the
              user to play, pause, skip, restart, or go to the previous track
              for the selected audio.
            </p>
          </div>
        ),
      },
    ],
  },
];
