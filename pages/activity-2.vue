<template>
  <div class="p2-main-container">
    <div class="header">
      <div class="head-left">
        <div class="logo-container">
          <img src="~static/logo-smaller.png" />
        </div>
        <div class="menu">
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Find your Role</a></li>
          </ul>
        </div>
      </div>
      <div class="head-center">
        <div class="search-group">
          <input type="text" placeholder="Type for job title or role" />
          <button>
            <font-awesome-icon :icon="['fa', 'search']"/>
            Search
          </button>
        </div>
      </div>
      <div class="head-right">
        <div class="profile-summary">
          <div class="profile-detail">
            <strong>John Mark Mancol</strong>
            <span>johnmarkmancol@gmail.com</span>
          </div>
          <div class="profile-photo-container">
            <img src="~static/profile.png" alt="">
          </div>
          <font-awesome-icon :icon="['fa', 'chevron-down']"/>
        </div>
      </div>
    </div>
    <div class="page-container">
      <div class="left-nav">
        <div>
          <ul>
            <li>
              <a href="#" class="active">
                <font-awesome-icon class="ico" :icon="['fa', 'user']"/>
                <span>Profile</span>
                <font-awesome-icon class="direction-icon" :icon="['fa', 'chevron-right']"/>
              </a>
            </li>
            <li>
              <a href="#">
                <font-awesome-icon class="ico" :icon="['fa', 'file-lines']"/>
                <span>Resume</span>
                <font-awesome-icon class="direction-icon" :icon="['fa', 'chevron-right']"/>
              </a>
            </li>
            <li>
              <a href="#">
                <font-awesome-icon class="ico" :icon="['fa', 'chart-column']"/>
                <span>Assessment</span>
                <font-awesome-icon class="direction-icon" :icon="['fa', 'chevron-right']"/>
              </a>
            </li>
            <li>
              <a href="#">
                <font-awesome-icon class="ico" :icon="['fa', 'desktop']"/>
                <span>Video Script</span>
                <font-awesome-icon class="direction-icon" :icon="['fa', 'chevron-right']"/>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <font-awesome-icon class="ico" :icon="['fa', 'suitcase']"/>
                <span>Application Tracking</span>
                <font-awesome-icon class="direction-icon" :icon="['fa', 'chevron-right']"/>
              </a>
            </li>
            <li>
              <a href="#">
                <font-awesome-icon class="ico" :icon="['fa', 'bookmark']"/>
                <span>Bookmarked</span>
                <font-awesome-icon class="direction-icon" :icon="['fa', 'chevron-right']"/>
              </a>
            </li>
            <li>
              <a href="#">
                <font-awesome-icon class="ico" :icon="['fa', 'bell']"/>
                <span>Notifications &nbsp; <b-badge variant="danger">1</b-badge></span>
                <font-awesome-icon class="direction-icon" :icon="['fa', 'chevron-right']"/>
              </a>
            </li>
            <li>
              <a href="#">
                <font-awesome-icon class="ico" :icon="['fa', 'chart-line']"/>
                <span>Activity Logs</span>
                <font-awesome-icon class="direction-icon" :icon="['fa', 'chevron-right']"/>
              </a>
            </li>
            <li>
              <a href="#">
                <font-awesome-icon class="ico" :icon="['fa', 'gear']"/>
                <span>Settings</span>
                <font-awesome-icon class="direction-icon" :icon="['fa', 'chevron-right']"/>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer">
          <span>Copyright 2018 - 2023. All Rights Reserved</span>
          <p>
            <a href="#">Terms of Use</a> • 
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
      <div class="contents">
        <div class="box">
          <div class="box-frame">
            <h5>Welcome, John Mark!</h5>
            <p>
              <span>You are almost done!</span>
              To further strengthen your profile, it is highly recommended for you to complete the 4 sections of your application.
            </p>
          </div>
          <div class="divider"></div>
          <div class="box-frame">
            <div class="progress-status">
              <ul>
                <li>
                  <div class="icon-container">
                    <font-awesome-icon :icon="['fa', 'user']"/>
                  </div>
                  <div class="progress-container orange">
                    <strong>Application Profile</strong>
                    <div class="progress-display">
                      <div class="progress-total">
                        <div class="progress-bar"></div>
                      </div>
                      75%
                    </div>
                  </div>
                </li>
                <li>
                  <div class="icon-container">
                    <font-awesome-icon :icon="['fa', 'file-lines']"/>
                  </div>
                  <div class="progress-container red">
                    <strong>Resume / CV</strong>
                    <div class="progress-display">
                      <div class="progress-total">
                        <div class="progress-bar"></div>
                      </div>
                      50%
                    </div>
                  </div>
                </li>
                <li>
                  <div class="icon-container">
                    <font-awesome-icon :icon="['fa', 'chart-column']"/>
                  </div>
                  <div class="progress-container">
                    <strong>Assessment Score</strong>
                    <div class="progress-display">
                      <div class="progress-total">
                        <div class="progress-bar"></div>
                      </div>
                      0%
                    </div>
                  </div>
                </li>
                <li>
                  <div class="icon-container">
                    <font-awesome-icon :icon="['fa', 'desktop']"/>
                  </div>
                  <div class="progress-container">
                    <strong>Video Introduction</strong>
                    <div class="progress-display">
                      <div class="progress-total">
                        <div class="progress-bar"></div>
                      </div>
                      0%
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="profile-container">
          <div class="profile-summary">
            <div class="box">
              <div class="box-frame">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ducimus, laborum velit accusamus necessitatibus molestiae aliquid architecto tempore earum, numquam excepturi ratione dolor exercitationem doloremque eum sapiente temporibus consectetur. Molestiae?
              </div>
            </div>
          </div>
          <div class="other-info">
            <div class="box">
              <div class="box-frame">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ducimus, laborum velit accusamus necessitatibus molestiae aliquid architecto tempore earum, numquam excepturi ratione dolor exercitationem doloremque eum sapiente temporibus consectetur. Molestiae?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  layout: 'activity-2-layout'
}
</script>