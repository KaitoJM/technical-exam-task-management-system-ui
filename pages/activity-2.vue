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
            <div class="reminder-notif">
              <input type="checkbox" />
              Don't remind me again
              <a href="#" class="close-btn">
                <font-awesome-icon :icon="['fa', 'xmark']"/>
              </a>
            </div>
            <h5>Welcome, John Mark!</h5>
            <p>
              <span class="accented">You are almost done!</span>
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
              <div class="profile-basic-info">
                <div class="profile-photo-container">
                  <div class="box-frame">
                    <img src="~static/profile.png" />
                  </div>
                </div>
                <div class="divider-h"></div>
                <div class="profile-basic-details">
                  <div class="box-frame">
                    <a href="#" class="btn-edit"><font-awesome-icon :icon="['fa', 'pencil']"/></a>
                    <h1>John Mark M. Mancol</h1>
                    <h3>Full Stack Developer</h3>
                    <p class="p-info course-info">
                      <font-awesome-icon class="direction-icon" :icon="['fa', 'graduation-cap']"/> 
                      Bachelor of Science in Information Technology
                    </p>
                    <div class="p-flex-info">
                      <p class="p-info">
                        <font-awesome-icon class="direction-icon" :icon="['fa', 'suitcase']"/> 
                        12 years
                      </p>
                      <p class="p-info">
                        <font-awesome-icon class="direction-icon" :icon="['fa', 'calendar-check']"/> 
                        Immediately
                      </p>
                      <p class="p-info">
                        <font-awesome-icon class="direction-icon" :icon="['fa', 'dollar-sign']"/> 
                        <span class="accented">Php 50,000</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="divider"></div>
              <div class="box-frame">
                <a href="#" class="btn-edit"><font-awesome-icon :icon="['fa', 'pencil']"/></a>
                <h5 class="section-title">General Details</h5>
                <ul class="list">
                  <li>
                    <div class="property">Date of Birth</div>
                    <div class="value">04 October 1993</div>
                  </li>
                  <li>
                    <div class="property">Gender</div>
                    <div class="value">Male</div>
                  </li>
                  <li>
                    <div class="property">Civil Status</div>
                    <div class="value">Single</div>
                  </li>
                  <li>
                    <div class="property">Nationality</div>
                    <div class="value">Filipino</div>
                  </li>
                </ul>
              </div>
              <div class="divider"></div>
              <div class="box-frame">
                <a href="#" class="btn-edit"><font-awesome-icon :icon="['fa', 'pencil']"/></a>
                <h5 class="section-title">Professional Status</h5>
                <ul class="list">
                  <li>
                    <div class="property">Recent Job Title</div>
                    <div class="value">Software Engineer</div>
                  </li>
                  <li>
                    <div class="property">Interview Availability</div>
                    <div class="value">-</div>
                  </li>
                  <li>
                    <div class="property">Current Monthly Salary (Gross)</div>
                    <div class="value accented">Php 45,000.00</div>
                  </li>
                  <li>
                    <div class="property">Allowance (Non-Taxable)</div>
                    <div class="value">-</div>
                  </li>
                  <li>
                    <div class="property">Pre-employment Leaves</div>
                    <div class="value">07 July - Birthday</div>
                  </li>
                  <li>
                    <div class="property">Where can you work?</div>
                    <div class="value">Office and Home</div>
                  </li>
                  <li>
                    <div class="property">Estimate Travel Time to Office</div>
                    <div class="value">15 mins</div>
                  </li>
                  <li>
                    <div class="property">Connection Type</div>
                    <div class="value">Globe Fiber</div>
                  </li>
                  <li>
                    <div class="property">Website / Portfolio</div>
                    <div class="value">http://juanmarcus.com</div>
                  </li>
                </ul>
              </div>
              <div class="divider"></div>
              <div class="box-frame">
                <a href="#" class="btn-edit"><font-awesome-icon :icon="['fa', 'pencil']"/></a>
                <h5 class="section-title">Preferences</h5>
                <ul class="list">
                  <li>
                    <div class="property">Day Shift</div>
                    <div class="value">-</div>
                  </li>
                  <li>
                    <div class="property">Mid Shift</div>
                    <div class="value">-</div>
                  </li>
                  <li>
                    <div class="property">Night Shift</div>
                    <div class="value">-</div>
                  </li>
                  <li>
                    <div class="property">English Only Policy (EOP)</div>
                    <div class="value">-</div>
                  </li>
                  <li>
                    <div class="property">Where did you hear us?</div>
                    <div class="value">-</div>
                  </li>
                  <li>
                    <div class="property">Marketing Permission</div>
                    <div class="value">-</div>
                  </li>
                  <li>
                    <div class="property">Referral</div>
                    <div class="value">-</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="other-info">
            <div class="box">
              <div class="box-frame">
                <h5 class="right-section-title">Video Introduction</h5>
              </div>
              <div class="video-intro">
                <img src="~static/video-intro.jpeg" alt="">
                <div class="time">
                  1:55
                </div>
              </div>
            </div>
            <div class="box">
              <div class="box-frame">
                <part-2-progress-bar label="Profile Completion" percentage="100" />
                <div class="award-box">
                  <div class="title">Well done, John Mark</div>
                  <img src="~static/award.png" alt="">
                  <p>
                    You have one of the strongest professional profile in our talent pool.
                    Expect progress on your application at anytime soon.
                  </p>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="box-frame">
                <part-2-progress-bar label="Profile Completion" percentage="50" />
                <div class="recommendations" :class="{'hidden': hide_recommendation}">
                  <a href="#" class="toggle-hide" @click="hide_recommendation = !hide_recommendation">
                    <font-awesome-icon v-if="!hide_recommendation" class="direction-icon" :icon="['fa', 'chevron-up']"/>
                    <font-awesome-icon v-else class="direction-icon" :icon="['fa', 'chevron-down']"/>
                    <span v-if="!hide_recommendation">Hide</span>
                    <span v-else>Show</span>
                     Recommendations
                  </a>
                  <div class="recommendation-content">
                    <p>
                      Fill up the following items to strengthen your profile.
                      This can help us matching your profile and increase your chances 
                      of landing into your desired role.
                    </p>

                    <ul>
                      <li>Share <a href="#">Date of birth</a></li>
                      <li>Specify <a href="#">Current Monthly Salary</a></li>
                      <li>Add one(1) <a href="#">Character Reference</a></li>
                      <li>Add <a href="#">Current Address</a></li>
                      <li>Add atleast five (5) items in <a href="#">Other Skills</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Part2ProgressBar from '../components/Part2ProgressBar.vue'
export default {
  components: { Part2ProgressBar },
  auth: false,
  layout: 'activity-2-layout',
  data() {
    return {
      hide_recommendation: false
    }
  }
}
</script>