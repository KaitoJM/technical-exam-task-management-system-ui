<template>
  <div class="main-container-gate">
    <div class="left-panel">
      <div>
        <center>
          <img class="logo" src="~/static/logo.png"/>
          <br />
          <br />
          <h1>Technical Exam</h1>
          <b>Simple Task Manager System</b>
          <br /><br /><br />
          <p>BY: JOHN MARK MANCOL</p>
          <br /><br />
          <b-link to="activity-2">
            Part 2 - Design Implementation Accuracy Test
            <font-awesome-icon :icon="['fa', 'right-long']"/>
          </b-link>
        </center>
      </div>
    </div>
    <div class="right-panel">
      <Nuxt />
    </div>
  </div>
</template>