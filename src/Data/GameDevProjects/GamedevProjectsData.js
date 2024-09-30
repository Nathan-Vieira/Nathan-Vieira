import CardImg from "./CombatPrototype/card.JPG";
import GameManagerImage from "./CombatPrototype/GameManager.JPG";
import ComponentsImage from "./CombatPrototype/Components.JPG";
import BackgroundImg from "./CombatPrototype/background.png";

export const gamedevProjectsData = [
  {
    id: 6,
    name: "Melee combat prototype",
    link: "asd.com",
    backgroundImage: BackgroundImg,
    color01: "rgb(172,201,227)",
    color02: "rgb(219,244,250)",
    cardTitleTxtColor: "rgb(40, 40, 40)",
    smallCardTitleTxtColor: "rgb(40, 40, 40)",
    pageTitleTxtColor: "rgb(40, 40, 40)",
    descTxtColor: "rgb(40, 40, 40)",
    cardImg: CardImg,
    cardImgSmall: CardImg,
    bannerImg: CardImg,
    desc: "Gamedev stuf",
    about: (
      <div>
        <p>hitstop collision</p>
        <p>inventory</p>
        <p>mesh rendering</p>
        <p>objectives</p>
      </div>
    ),
    overView: (
      <div>
        <h1>Combat Prototype</h1>
        <hr />
        <p>
          This medieval combat prototype serves as a hands-on exploration of
          game development principles, particularly focusing on melee combat
          mechanics, AI behavior, and animation systems.
          <br />
          <br />
          The project allowed me to familiarize myself with key aspects of
          Unity, including character controller programming, hit detection, and
          dynamic combat interactions. By building this prototype, I aimed to
          gain practical experience in creating immersive combat experiences and
          understand the complexities involved in designing responsive gameplay
          mechanics for medieval-style encounters.
        </p>
      </div>
    ),
    finalThoughts: (
      <p>
        Working on this medieval combat prototype was a fun and rewarding way to
        expose myself to the world of game development in Unity.
        <br />
        <br />
        The project allowed me to explore various gameplay systems, from melee
        combat mechanics and AI behavior to animation and UI design. By
        experimenting with key Unity components such as character controllers,
        hit detection, and dynamic combat interactions, I gained invaluable
        hands-on experience.
        <br />
        <br />
        Building features like full-body animations, impact particles, and a
        flexible inventory system deepened my understanding of how immersive
        combat experiences are created. Additionally, designing complex AI
        decision-making processes and implementing responsive UI elements gave
        me insight into how different systems must work in harmony to deliver a
        cohesive gameplay experience. Overall, this prototype was not just an
        exercise in technical skills but also a great opportunity to explore the
        creative side of game development. I'm excited to take what I’ve learned
        and apply it to future projects.
      </p>
    ),
    media: [
      {
        src: (
          <iframe
            width="850"
            height="500"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; "
            allowFullScreen
            title="showcase"
            src="https://www.youtube.com/embed/6sLAFxT1tTM"
            style={{ border: "none" }}
          ></iframe>
        ),
        description: (
          <ul>
            <li>
              <b>Profile Management:</b> Create and delete player profiles,
              storing character information such as name, race, and attributes.
            </li>
            <li>
              <b>Full-Body Animations:</b> Showcases first-person animations,
              including body movements and interactions, providing an immersive
              gameplay experience.
            </li>
            <li>
              <b>Hit Stop Animations:</b> Features hit stop animations, where
              the action progress is tracked to dynamically play different
              animations on impact to emphasize the strike.
            </li>
            <li>
              <b>Impact Particles:</b> Visualizes particle effects triggered by
              impacts, enhancing the sense of physical collisions.
            </li>
            <li>
              <b>Acquiring and Equipping Items:</b> Shows how players can
              acquire items, equip them seamlessly within the game, and see them
              on your character.
            </li>
          </ul>
        ),
      },
      {
        src: (
          <iframe
            width="850"
            height="500"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; "
            allowFullScreen
            title="showcase"
            src="https://www.youtube.com/embed/89kYTVZ_v90"
            style={{ border: "none" }}
          ></iframe>
        ),
        description: (
          <ul>
            <li>
              <b>Combat:</b> Spawning combat dummies for testing and practice.
              Blocking and attacking. Stun mechanics. Swing manipulation to hit
              multiple enemies. Blood particles. Tagging enemies to avoid
              multiple collisions
            </li>
            <li>
              <b>UI:</b> Damage numbers and UI elements for feedback on hit.
              Target health display
            </li>
            <li>
              <b>AI:</b> Offensive decision-making of repositioning and
              attacking.
            </li>
          </ul>
        ),
      },
      {
        src: (
          <iframe
            width="850"
            height="500"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; "
            allowFullScreen
            title="showcase"
            src="https://www.youtube.com/embed/rZs0wfaTddA"
            style={{ border: "none" }}
          ></iframe>
        ),
        description: (
          <ul>
            <li>
              <b>Domination Gametype:</b> Bots and player can gather resources
              and capture points to win.
            </li>
            <li>
              <b>Behavior Modifiers:</b> Bot decisions are calculated based on
              the current game environment like currently captured points, their
              selected class, and assigned behavior modifier scriptable objects.
            </li>
            <li>
              <b>AI:</b> Bots will make decisions such as capture home point,
              capture mid, attack closest enemy, and gather resources to
              stockpile.
            </li>
          </ul>
        ),
      },
      {
        src: <img src={ComponentsImage} alt="" />,
        description: (
          <p>
            This Unity prefab represents the player object, designed with a
            modular approach where each component is responsible for a specific
            aspect of gameplay.
            <br />
            <br />
            The UI system handles all player interfaces, including health bars
            and menus. Inventory management allows players to store, equip, and
            manage items. The combat system enables weapon interactions and
            damage handling, while the animation component governs character
            movement and reactions. Audio provides immersive sound effects
            linked to in-game events, and the objectives system tracks mission
            progress and player goals.
            <br />
            <br />
            This prefab ensures flexibility and scalability in gameplay
            features.
          </p>
        ),
      },
      {
        src: <img src={GameManagerImage} alt="" />,
        description: (
          <p>
            Finally, this Unity prefab manages the overall game state and
            handles scene transitions.
            <br />
            <br />
            It detects whether the player is in the main menu, actively in-game,
            or has started a specific game type.
            <br />
            <br />
            Based on the current state, it adjusts the visibility of various UI
            elements and coordinates camera movements between scenes. This
            prefab is responsible for ensuring smooth transitions and dynamic
            responses to player actions, creating a seamless experience across
            different game modes and stages.
          </p>
        ),
      },
    ],
  },
];
