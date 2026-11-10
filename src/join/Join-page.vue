<script setup>
import BaseHeader from '../../src/components/BaseHeader.vue'
import BaseFooter from '../../src/components/BaseFooter.vue'
</script>

<template>

  <BaseHeader />

  <main>
    <h2>Become a part of the Team</h2>
    <h3>Are you a <a href="#student">student</a> or a <a href="#mentor">mentor</a> looking to join?</h3>
    <div class="band" id="about">
      <h3><span>What's </span>Stan Robotix ?</h3>
      <p>
        Stan Robotix is organized into several <a href="/about/#subteams"><span>subteams</span></a>, each with its own captain and members,  
        even though a member can obviously be part of multiple <a href="/about/#subteams"><span>subteams</span></a> at the same time!  
        We work on a regular schedule within Collège Stanislas in Montreal.<br />
        Here is the typical weekly schedule, depending on the subteam you're in:
      </p>
      <table class="schedule">
        <thead><tr><th class="subteam-name">Subteam</th><th class="subteam-time">Time of meeting(s)</th></tr></thead>
        <tbody>
          <tr><td class="subteam-name">Build Team:</td><td class="subteam-time">Thursday and Friday from 5:30 PM to 7:30 PM.</td></tr>
          <tr><td class="subteam-name">Media Team:</td><td class="subteam-time">Friday from 5:30 PM to 7:30 PM.</td></tr>
          <tr><td class="subteam-name">Marketing Team:</td><td class="subteam-time">Friday from 5:30 PM to 7:30 PM.</td></tr>
          <tr><td class="subteam-name">Finance Team:</td><td class="subteam-time">Thursday from 5:30 PM to 7:30 PM.</td></tr>
          <tr><td class="subteam-name">Programming Team:</td><td class="subteam-time">Tuesday and Friday from 5:30 PM to 7:30 PM.</td></tr>
          <tr><td class="subteam-name">Design Team:</td><td class="subteam-time">Wednesday and Friday from 5:30 PM to 7:30 PM.</td></tr>
        </tbody>
      </table>
      <p>This is subject to change from year to year depending on mentor availability and student attendance.</p>
       
    </div><div class="band" id="student">
      <h3><a href="https://monportail.stanislas.qc.ca/Pednet/login.asp" target="COBA">Join <span>as a</span> student</a>
      </h3>
      <p>
        The project is open to all those who are interested, no prerequisites! You can come visit us at any time so
        that you're able to know if you're interested and then join later. <br />
        For the registration, go on the "<a href="https://monportail.stanislas.qc.ca/Pednet/login.asp"
          target="COBA">COBA</a>" platform in the parent's portal and navigate to the SVE's online inscriptions. Then
        go into cultural activities and register to "StanRobotix".
      </p>
    </div>
    <div class="band" id="mentor">
      <h3><a href="https://robotiquefirstquebec.org/communaute/coach-mentor/" target="mentorat">Join <span>as an</span>
          adult</a></h3>
      <p>
        Anyone over 18 years old is invited to join, no matter if you have previous experience with robotics or
        Stanislas. Here if a guide that explains what it means to be a FIRST mentor and how to become one: <a href="https://robotiquefirstquebec.org/communaute/coach-mentor/"
          target="mentorat">french</a>/<a
          href="https://www.firstinspires.org/ways-to-help/volunteer/mentors-and-coaches" target="mentoring">english</a>.
        If you are interested in joining the team as a mentor,
        contact us at <a href="mailto:stanrobotix@gmail.com?subject=Interest%20in%20mentoring">stanrobotix@gmail.com</a>
      </p>
    </div>
  </main>

  <BaseFooter />
</template>

<style scoped lang="scss">
@use "../assets/base.scss";

h2 {
  text-align: center;
  font-size: min(17vw, 70px);
  line-height: calc(min(17vw, 70px) + 15px);
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  font-family: "New Amsterdam", sans-serif;
}

h3 {
  text-align: center;
  font-size: min(13vw, 50px);
  line-height: calc(min(13vw, 50px) + 15px);
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  font-family: "New Amsterdam", sans-serif;

  a {
    color: base.$accent;
  }
}

.band {
  background-color: base.$grey;
  border: 10px solid base.$secondary;
  margin: auto;
  margin-top: 50px;
  width: 60%;
  padding: 0 15px;

  h3 {
    color: base.$accent;

    span {
      color: base.$blue;
    }
  }

  p {
    text-align: justify;
    font-size: large;
    margin: 15px auto;
  }
  li {
    text-align: justify;
    font-size: large;
    margin: 5px auto;
    margin-left: 3%;
  }
  div {
    font-weight: bold;
    text-align: justify;
    font-size: large;
  }
  a span {
    color: base.$blue;
  }
}

table, td, th {
  border: base.$secondary solid 2px;
}

table {
  margin: auto;

  td, th {
    padding: 4px;
  }
}
</style>