<script setup>
import BaseHeader from '../../src/components/BaseHeader.vue'
import BaseFooter from '../../src/components/BaseFooter.vue'
</script>

<template>

  <BaseHeader />

  <main>
    <h2>Become a part of the Team</h2>
    <h3>Are you a <a href="#student">student</a> or an <a href="#adult">adult</a> looking to join?</h3>
    <div class="member band" id="student">
      <h3><a href="https://monportail.stanislas.qc.ca/Pednet/login.asp" target="COBA">Join <span>as a</span> student</a>
      </h3>
      <p>The project is open to all those who are interested, no prerequisites! You can come visit us at any time so
        that you're able to know if you're interested and then join later. </br>
        For the registration, go on the "<a href="https://monportail.stanislas.qc.ca/Pednet/login.asp"
          target="COBA">COBA</a>" platform in the parent's portal and navigate to the SVE's online inscriptions. Then
        go into cultural activities and register to "StanRobotix".</p>
    </div>
    <div class="mentor band" id="adult">
      <h3><a href="https://robotiquefirstquebec.org/communaute/coach-mentor/" target="mentorat">Join <span>as an</span>
          adult</a></h3>
      <p>Anyone that is over 18 years old is invited to join, no matter if you have previous experience with robotics or
        Stanislas. The only requirement if to be over 18 years old. Here if a guide that explains what it means to be a
        FIRST mentor and how to become one: <a href="https://robotiquefirstquebec.org/communaute/coach-mentor/"
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
@import "../assets/base.scss";

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
    color: $accent;
  }
}

.band {
  background-color: $grey;
  border: 10px solid $secondary;
  margin: auto;
  margin-top: 50px;
  width: 60%;
  padding: 0 15px;

  h3 {
    color: $accent;

    span {
      color: $blue;
    }
  }

  p {
    text-align: justify;
    font-size: large;
    margin: 15px auto;
  }
}
</style>