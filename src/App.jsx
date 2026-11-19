import DemoCssComponent from "./demo-css/demo-css-component";
import DemoHTMLComponent from "./demo-html/demo-html";
import FlexConcept2 from "./flex-concept-2/flex-concept-2";
import FlexComponent from "./flex-concept/flex-component";
import HeroComponent from "./hero-component/hero-component";
import LeadersTodayLearnersTomorrow from "./leaders-today-leaders-tomorrow/leaders-today-learners-tomorrow";
import NpmDropdownComponent from "./npm-dropdown/npm-dropdown-component";
import UseEffectComponent from "./useEffect-component/useEffect-component";
import UsestateComponent from "./usestate/usestate";
import UseStateTwo from "./usestate/usestate-2";

function App() {
  const object1 = {
    title: "Leaders Today, Learners Tomorrow",
    subTitle:
      "With our continuous research and development, we provide you with an excellent Aptitude training.",
  };
  const object2 = {
    title: "Hello world",
    subTitle: "Hello KEC",
  };
  const object3 = {
    title: "Hello Chennai",
    subTitle: "Hello IIT",
  };
  return (
    <>
      {/* <h1>Hello world</h1>
      <h2>Hello AGH</h2>
      <div>
        Born in Ranchi, Dhoni made his first-class debut for Bihar in 1999. He
        made his debut for the Indian cricket team on 23 December 2004 in an ODI
        against Bangladesh and played his first Test a year later against Sri
        Lanka. In 2007, he became the captain of the ODI team before taking over
        as captain in all formats by 2008. Dhoni retired from Test cricket in
        2014 but continued playing in limited overs cricket until 2019. He has
        scored 17,266 runs in international cricket, including 10,773 runs at an
        average of more than 50 in ODIs.
      </div>
      <p>
        In the Indian Premier League (IPL), Dhoni plays for the Chennai Super
        Kings (CSK), leading them to the finals on ten occasions and winning the
        title five times (2010, 2011, 2018, 2021, and 2023)– a record he jointly
        shares with Rohit Sharma. He has also led CSK to two Champions League
        T20 titles in 2010 and 2014. Dhoni is among the few batsmen to have
        scored more than five thousand runs in the IPL, as well as being the
        first wicket-keeper to do so
      </p>
      <a href="https://www.google.com/?zx=1794824796260">Google</a>
      <a href="https://www.google.com/?zx=1794824796260" target="_blank">
        Google
      </a>
      <ol>
        <li>Bat</li>
        <li>Ball</li>
        <li>Wicket</li>
      </ol>
      <ul>
        <li>Bat</li>
        <li>Ball</li>
        <li>Wicket</li>
      </ul>
      <img
        src="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg"
        alt="Dhoni"
      /> */}
      {/* <table border="1" cellpadding="20" cellspacing="0">
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Sai</td>
          <td>Arun</td>
          <td>GH</td>
        </tr>
      </table> */}
      {/* <table border="1" cellPadding="20" cellSpacing="0">
        <tr>
          <th>Firstname</th>
          <td>Sai</td>
          <td>Eve</td>
        </tr>
        <tr>
          <th>Lastname</th>
          <td>Arun</td>
          <td>Jackson</td>
        </tr>
        <tr>
          <th>Age</th>
          <td>26</td>
          <td>20</td>
        </tr>
      </table> */}
      {/* <form method="post" action="/submit">
        <label for="email">Enter your Email</label>
        <input type="email" id="email" name="email" />
        <label for="password">Enter your Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Submit</button>
      </form> */}
      {/* <form method="post">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          minLength="2"
          maxLength="50"
          required
        />
        <label for="mobile">Mobile</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          pattern="[0-9]{10}"
          maxLength="10"
          required
        />
        <button type="submit">Submit</button>
      </form> */}
      {/* <div>
        <div
          style={{
            backgroundColor: "lightblue",
            color: "yellow",
            fontSize: "40px",
          }}
        >
          ; born 7 July 1981) is an Indian professional cricketer who plays as a
          right-handed batter and a wicket-keeper. Widely regarded as one of the
          most prolific wicket-keeper batsmen and captains, he represented the
          Indian cricket team and was the captain of the team in limited overs
          formats from 2007 to 2017 and in Test cricket from 2008 to 2014. Dhoni
          has captained the most number of international matches and is the most
          successful Indian captain. He has led India to victory in the 2007 ICC
          World Twenty20, the 2011 Cricket World Cup, and the 2013 ICC Champions
          Trophy, being the only captain to win three different limited overs
          ICC tournaments. He also led the teams that won the Asia Cup in 2010
          and 2016, and was a member of the title-winning squad in 2018.
        </div>
        <div style={{ backgroundColor: "red", color: "white" }}>
          Born in Ranchi, Dhoni made his first-class debut for Bihar in 1999. He
          made his debut for the Indian cricket team on 23 December 2004 in an
          ODI against Bangladesh and played his first Test a year later against
          Sri Lanka. In 2007, he became the captain of the ODI team before
          taking over as captain in all formats by 2008. Dhoni retired from Test
          cricket in 2014 but continued playing in limited overs cricket until
          2019. He has scored 17,266 runs in international cricket, including
          10,773 runs at an average of more than 50 in ODIs.
        </div>
      </div> */}
      {/* <DemoCssComponent /> */}
      {/* <FlexComponent /> */}
      {/* <DemoCssComponent />
      <DemoHTMLComponent /> */}
      {/* <FlexConcept2 /> */}
      {/* <HeroComponent />
      <LeadersTodayLearnersTomorrow value={10} data={object1} />
      <LeadersTodayLearnersTomorrow value={20} data={object2} />
      <LeadersTodayLearnersTomorrow value={30} data={object3} /> */}
      {/* <UsestateComponent /> */}
      {/* <UseStateTwo />
      <NpmDropdownComponent /> */}
      <UseEffectComponent />
    </>
  );
}

export default App;
