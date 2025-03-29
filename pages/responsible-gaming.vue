<template>
  <div class="responsible-gaming-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="page-title">Responsible Gaming</h1>
        <p class="page-subtitle">
          At Gamblers' Future, we're committed to promoting safe and responsible
          gambling practices. Learn about the tools and resources available to
          help maintain a healthy relationship with gambling.
        </p>
      </div>
    </section>

    <!-- Navigation Pills -->
    <section class="navigation-section">
      <div class="container">
        <div class="navigation-pills">
          <button
            v-for="(section, index) in sections"
            :key="index"
            class="nav-pill"
            :class="{ active: activeSection === index }"
            @click="scrollToSection(index)"
          >
            <i :class="section.icon"></i>
            <span>{{ section.title }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Our Commitment Section -->
    <section id="commitment" class="content-section">
      <div class="container">
        <div class="section-header" ref="sectionRefs[0]">
          <h2>Our Commitment to Responsible Gaming</h2>
          <p>
            We believe gambling should always be an enjoyable form of
            entertainment, not a source of financial or emotional distress.
          </p>
        </div>

        <div class="commitment-cards">
          <div class="commitment-card">
            <div class="card-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3>Player Protection</h3>
            <p>
              We advocate for the implementation of robust player protection
              measures across all gambling platforms.
            </p>
          </div>

          <div class="commitment-card">
            <div class="card-icon">
              <i class="fas fa-balance-scale"></i>
            </div>
            <h3>Fair Practices</h3>
            <p>
              We ensure that gambling operators adhere to fair gaming practices
              and transparent terms and conditions.
            </p>
          </div>

          <div class="commitment-card">
            <div class="card-icon">
              <i class="fas fa-hand-holding-heart"></i>
            </div>
            <h3>Support Access</h3>
            <p>
              We provide easy access to support resources and tools for those
              who may be experiencing gambling-related issues.
            </p>
          </div>

          <div class="commitment-card">
            <div class="card-icon">
              <i class="fas fa-book-open"></i>
            </div>
            <h3>Education</h3>
            <p>
              We're committed to educating players about the risks associated
              with gambling and how to maintain control.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Recognizing Problem Gambling Section -->
    <section id="recognizing" class="content-section bg-darker">
      <div class="container">
        <div class="section-header" ref="sectionRefs[1]">
          <h2>Recognizing Problem Gambling</h2>
          <p>
            Understanding the warning signs of problem gambling is the first
            step in addressing potential issues.
          </p>
        </div>

        <div class="warning-signs">
          <div class="warning-sign">
            <div class="sign-icon">
              <i class="fas fa-clock"></i>
            </div>
            <div class="sign-content">
              <h3>Spending Excessive Time</h3>
              <p>
                Gambling for longer periods than intended or letting gambling
                interfere with daily responsibilities.
              </p>
            </div>
          </div>

          <div class="warning-sign">
            <div class="sign-icon">
              <i class="fas fa-coins"></i>
            </div>
            <div class="sign-content">
              <h3>Chasing Losses</h3>
              <p>
                Repeatedly trying to win back money after losses or increasing
                bets to recover previous losses.
              </p>
            </div>
          </div>

          <div class="warning-sign">
            <div class="sign-icon">
              <i class="fas fa-search-dollar"></i>
            </div>
            <div class="sign-content">
              <h3>Financial Strain</h3>
              <p>
                Borrowing money, selling possessions, or using essential funds
                (like rent or bill money) to gamble.
              </p>
            </div>
          </div>

          <div class="warning-sign">
            <div class="sign-icon">
              <i class="fas fa-user-friends"></i>
            </div>
            <div class="sign-content">
              <h3>Neglecting Relationships</h3>
              <p>
                Prioritizing gambling over spending time with family and friends
                or attending social events.
              </p>
            </div>
          </div>

          <div class="warning-sign">
            <div class="sign-icon">
              <i class="fas fa-brain"></i>
            </div>
            <div class="sign-content">
              <h3>Preoccupation</h3>
              <p>
                Constantly thinking about gambling, planning the next session,
                or reliving past gambling experiences.
              </p>
            </div>
          </div>

          <div class="warning-sign">
            <div class="sign-icon">
              <i class="fas fa-angry"></i>
            </div>
            <div class="sign-content">
              <h3>Irritability</h3>
              <p>
                Becoming restless, irritable, or anxious when trying to cut down
                on gambling or stop altogether.
              </p>
            </div>
          </div>

          <div class="warning-sign">
            <div class="sign-icon">
              <i class="fas fa-user-secret"></i>
            </div>
            <div class="sign-content">
              <h3>Hiding Gambling Habits</h3>
              <p>
                Lying about how much time or money is spent on gambling to
                family members or others.
              </p>
            </div>
          </div>

          <div class="warning-sign">
            <div class="sign-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <div class="sign-content">
              <h3>Escalating Behavior</h3>
              <p>
                Needing to gamble with increasing amounts of money to achieve
                the desired excitement or thrill.
              </p>
            </div>
          </div>
        </div>

        <div class="self-assessment">
          <h3>Self-Assessment Quiz</h3>
          <p>
            Take our confidential quiz to assess your gambling habits and
            determine if you might be at risk for problem gambling.
          </p>
          <button class="primary-button" @click="openSelfAssessment">
            <i class="fas fa-clipboard-check"></i>
            Take the Self-Assessment Quiz
          </button>
        </div>
      </div>
    </section>

    <!-- Responsible Gaming Tools Section -->
    <section id="tools" class="content-section">
      <div class="container">
        <div class="section-header" ref="sectionRefs[2]">
          <h2>Responsible Gaming Tools</h2>
          <p>
            Many gambling operators offer these tools to help you maintain
            control over your gambling activities.
          </p>
        </div>

        <div class="tools-grid">
          <div class="tool-card">
            <div class="tool-icon">
              <i class="fas fa-wallet"></i>
            </div>
            <h3>Deposit Limits</h3>
            <p>
              Set daily, weekly, or monthly limits on how much money you can
              deposit into your gambling account.
            </p>
            <div class="tool-implementation">
              <h4>How to implement:</h4>
              <ul>
                <li>Go to your account settings</li>
                <li>Look for "Responsible Gaming" or "Limits" section</li>
                <li>Set your preferred deposit limit amount and time period</li>
              </ul>
            </div>
          </div>

          <div class="tool-card">
            <div class="tool-icon">
              <i class="fas fa-hourglass-half"></i>
            </div>
            <h3>Time Limits</h3>
            <p>
              Restrict the amount of time you can spend on a gambling platform
              during a specific time period.
            </p>
            <div class="tool-implementation">
              <h4>How to implement:</h4>
              <ul>
                <li>Access your account preferences</li>
                <li>Navigate to the responsible gaming section</li>
                <li>Set daily or session time limits</li>
              </ul>
            </div>
          </div>

          <div class="tool-card">
            <div class="tool-icon">
              <i class="fas fa-hand-paper"></i>
            </div>
            <h3>Loss Limits</h3>
            <p>
              Establish thresholds for how much you can lose in a day, week, or
              month to prevent significant losses.
            </p>
            <div class="tool-implementation">
              <h4>How to implement:</h4>
              <ul>
                <li>Visit your account settings</li>
                <li>Find the "Loss Limits" option</li>
                <li>Enter your maximum acceptable loss amount</li>
              </ul>
            </div>
          </div>

          <div class="tool-card">
            <div class="tool-icon">
              <i class="fas fa-pause-circle"></i>
            </div>
            <h3>Reality Checks</h3>
            <p>
              Receive notifications about how long you've been playing, helping
              you stay aware of time spent gambling.
            </p>
            <div class="tool-implementation">
              <h4>How to implement:</h4>
              <ul>
                <li>Go to the responsible gaming settings</li>
                <li>Enable reality check notifications</li>
                <li>Set your preferred time intervals</li>
              </ul>
            </div>
          </div>

          <div class="tool-card">
            <div class="tool-icon">
              <i class="fas fa-snowflake"></i>
            </div>
            <h3>Cooling-Off Periods</h3>
            <p>
              Take short breaks from gambling by temporarily suspending your
              account for a period of your choosing.
            </p>
            <div class="tool-implementation">
              <h4>How to implement:</h4>
              <ul>
                <li>Access account settings</li>
                <li>Look for "Take a Break" or "Timeout" option</li>
                <li>Select your desired break duration (days to weeks)</li>
              </ul>
            </div>
          </div>

          <div class="tool-card">
            <div class="tool-icon">
              <i class="fas fa-ban"></i>
            </div>
            <h3>Self-Exclusion</h3>
            <p>
              Exclude yourself from gambling platforms for extended periods,
              from months to permanent exclusion.
            </p>
            <div class="tool-implementation">
              <h4>How to implement:</h4>
              <ul>
                <li>Navigate to responsible gaming options</li>
                <li>Select the self-exclusion feature</li>
                <li>Choose your exclusion duration</li>
                <li>Confirm your decision</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Resources for Help -->
    <section id="help" class="content-section bg-darker">
      <div class="container">
        <div class="section-header" ref="sectionRefs[3]">
          <h2>Resources for Help</h2>
          <p>
            If you or someone you know is struggling with gambling-related
            issues, these resources can provide support and guidance.
          </p>
        </div>

        <div class="resources-container">
          <div class="resources-tabs">
            <button
              v-for="(tab, index) in resourceTabs"
              :key="index"
              class="resource-tab"
              :class="{ active: activeResourceTab === index }"
              @click="activeResourceTab = index"
            >
              <i :class="tab.icon"></i>
              <span>{{ tab.title }}</span>
            </button>
          </div>

          <div class="resources-content">
            <!-- Helplines Tab -->
            <div v-if="activeResourceTab === 0" class="resource-content">
              <div class="helplines">
                <div
                  v-for="(helpline, index) in helplines"
                  :key="index"
                  class="helpline-card"
                >
                  <div class="helpline-region">{{ helpline.region }}</div>
                  <div class="helpline-org">{{ helpline.organization }}</div>
                  <a
                    :href="`tel:${helpline.phone.replace(/[^0-9+]/g, '')}`"
                    class="helpline-phone"
                  >
                    <i class="fas fa-phone-alt"></i>
                    {{ helpline.phone }}
                  </a>
                  <div class="helpline-hours">{{ helpline.hours }}</div>
                  <a
                    :href="helpline.website"
                    class="helpline-website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fas fa-external-link-alt"></i>
                    Visit Website
                  </a>
                </div>
              </div>
            </div>

            <!-- Support Groups Tab -->
            <div v-if="activeResourceTab === 1" class="resource-content">
              <div class="support-groups">
                <div
                  v-for="(group, index) in supportGroups"
                  :key="index"
                  class="support-group-card"
                >
                  <div class="support-group-logo">
                    <img :src="group.logo" :alt="group.name" />
                  </div>
                  <h3>{{ group.name }}</h3>
                  <p>{{ group.description }}</p>
                  <a
                    :href="group.website"
                    class="support-group-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <!-- Therapy Options Tab -->
            <div v-if="activeResourceTab === 2" class="resource-content">
              <div class="therapy-options">
                <div class="therapy-type">
                  <h3><i class="fas fa-user"></i> Individual Therapy</h3>
                  <p>
                    One-on-one sessions with a trained therapist who specializes
                    in addiction and gambling disorders. This personalized
                    approach allows for tailored treatment strategies.
                  </p>
                </div>

                <div class="therapy-type">
                  <h3><i class="fas fa-users"></i> Group Therapy</h3>
                  <p>
                    Structured sessions with peers facing similar challenges,
                    facilitated by a professional therapist. Sharing experiences
                    can provide insights and mutual support.
                  </p>
                </div>

                <div class="therapy-type">
                  <h3><i class="fas fa-laptop"></i> Online Therapy</h3>
                  <p>
                    Virtual therapy sessions accessible from anywhere, offering
                    convenience and privacy. Many platforms provide specialized
                    gambling addiction counseling.
                  </p>
                </div>

                <div class="therapy-type">
                  <h3>
                    <i class="fas fa-brain"></i> Cognitive Behavioral Therapy
                    (CBT)
                  </h3>
                  <p>
                    A structured therapeutic approach that helps identify and
                    change negative thought patterns and behaviors related to
                    gambling.
                  </p>
                </div>

                <div class="therapy-find-help">
                  <h3>Finding a Therapist</h3>
                  <p>
                    To find a qualified therapist specializing in gambling
                    addiction:
                  </p>
                  <ul>
                    <li>Consult your primary care physician for referrals</li>
                    <li>
                      Contact your health insurance provider for covered options
                    </li>
                    <li>
                      Use therapist directories with addiction specialization
                      filters
                    </li>
                    <li>
                      Reach out to gambling addiction helplines for
                      recommendations
                    </li>
                  </ul>
                  <div class="therapy-links">
                    <a
                      href="https://www.psychologytoday.com/find-therapist"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="therapy-link"
                    >
                      <i class="fas fa-search"></i> Psychology Today Therapist
                      Finder
                    </a>
                    <a
                      href="https://www.bacp.co.uk/search/Therapists"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="therapy-link"
                    >
                      <i class="fas fa-search"></i> BACP Therapist Directory
                      (UK)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Self-Help Materials Tab -->
            <div v-if="activeResourceTab === 3" class="resource-content">
              <div class="self-help-materials">
                <div class="self-help-section">
                  <h3>Recommended Books</h3>
                  <div class="self-help-books">
                    <div
                      v-for="(book, index) in books"
                      :key="index"
                      class="book-card"
                    >
                      <div class="book-cover">
                        <img :src="book.cover" :alt="book.title" />
                      </div>
                      <div class="book-info">
                        <h4>{{ book.title }}</h4>
                        <p class="book-author">by {{ book.author }}</p>
                        <p class="book-description">{{ book.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="self-help-section">
                  <h3>Useful Apps</h3>
                  <div class="self-help-apps">
                    <div
                      v-for="(app, index) in apps"
                      :key="index"
                      class="app-card"
                    >
                      <div class="app-icon">
                        <img :src="app.icon" :alt="app.name" />
                      </div>
                      <div class="app-info">
                        <h4>{{ app.name }}</h4>
                        <div class="app-platforms">
                          <span v-if="app.ios"
                            ><i class="fab fa-apple"></i> iOS</span
                          >
                          <span v-if="app.android"
                            ><i class="fab fa-android"></i> Android</span
                          >
                        </div>
                        <p class="app-description">{{ app.description }}</p>
                        <div class="app-links">
                          <a
                            v-if="app.ios"
                            :href="app.iosLink"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i class="fab fa-apple"></i> App Store
                          </a>
                          <a
                            v-if="app.android"
                            :href="app.androidLink"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i class="fab fa-google-play"></i> Google Play
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="self-help-section">
                  <h3>Workbooks & Guides</h3>
                  <div class="self-help-guides">
                    <div
                      v-for="(guide, index) in guides"
                      :key="index"
                      class="guide-card"
                    >
                      <div class="guide-icon">
                        <i class="fas fa-file-pdf"></i>
                      </div>
                      <div class="guide-info">
                        <h4>{{ guide.title }}</h4>
                        <p class="guide-description">{{ guide.description }}</p>
                        <a
                          :href="guide.downloadLink"
                          class="guide-download"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i class="fas fa-download"></i> Download PDF
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Protecting Vulnerable Groups -->
    <section id="protecting" class="content-section">
      <div class="container">
        <div class="section-header" ref="sectionRefs[4]">
          <h2>Protecting Vulnerable Groups</h2>
          <p>
            Certain groups may be more susceptible to gambling-related harm and
            require additional safeguards.
          </p>
        </div>

        <div class="vulnerable-groups">
          <div class="group-card">
            <div class="group-icon">
              <i class="fas fa-child"></i>
            </div>
            <h3>Underage Gambling</h3>
            <p>
              Gambling is restricted to adults (18+ in most countries). We
              advocate for strict age verification processes and support
              initiatives to prevent minors from accessing gambling sites.
            </p>
            <h4>Resources for Parents:</h4>
            <ul>
              <li>Parental control software recommendations</li>
              <li>Guidelines for discussing gambling with children</li>
              <li>Warning signs of underage gambling</li>
            </ul>
            <button class="secondary-button" @click="openParentalGuide">
              <i class="fas fa-book"></i> Parental Guide
            </button>
          </div>

          <div class="group-card">
            <div class="group-icon">
              <i class="fas fa-brain"></i>
            </div>
            <h3>Mental Health Considerations</h3>
            <p>
              Individuals with certain mental health conditions such as
              depression, anxiety, or substance use disorders may be at higher
              risk for developing gambling problems.
            </p>
            <h4>Important Considerations:</h4>
            <ul>
              <li>Gambling can worsen existing mental health conditions</li>
              <li>Some medications may affect decision-making</li>
              <li>Co-occurring disorders require specialized treatment</li>
            </ul>
            <a
              href="#help"
              class="secondary-button"
              @click="scrollToSection(3)"
            >
              <i class="fas fa-first-aid"></i> Access Mental Health Resources
            </a>
          </div>

          <div class="group-card">
            <div class="group-icon">
              <i class="fas fa-history"></i>
            </div>
            <h3>Individuals with Past Gambling Issues</h3>
            <p>
              Those who have previously experienced gambling problems may be
              vulnerable to relapse and should take extra precautions when
              engaging with gambling content.
            </p>
            <h4>Relapse Prevention Strategies:</h4>
            <ul>
              <li>Utilizing self-exclusion programs</li>
              <li>Maintaining connection with support networks</li>
              <li>Recognizing personal triggers</li>
            </ul>
            <button class="secondary-button" @click="openRelapsePrevention">
              <i class="fas fa-shield-alt"></i> Relapse Prevention Guide
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Myths and Facts Section -->
    <section id="myths" class="content-section bg-darker">
      <div class="container">
        <div class="section-header" ref="sectionRefs[5]">
          <h2>Gambling Myths vs. Facts</h2>
          <p>
            Understanding the truth about gambling can help you make more
            informed decisions.
          </p>
        </div>

        <div class="myths-facts">
          <div
            v-for="(item, index) in mythsAndFacts"
            :key="index"
            class="myth-fact-card"
            :class="{ expanded: expandedMythFact === index }"
          >
            <div class="card-header" @click="toggleMythFact(index)">
              <div class="header-content">
                <div
                  class="myth-fact-badge"
                  :class="{
                    myth: item.type === 'myth',
                    fact: item.type === 'fact',
                  }"
                >
                  {{ item.type }}
                </div>
                <h3>{{ item.title }}</h3>
              </div>
              <div class="expand-icon">
                <i
                  class="fas"
                  :class="expandedMythFact === index ? 'fa-minus' : 'fa-plus'"
                ></i>
              </div>
            </div>
            <div class="card-content">
              <p>{{ item.content }}</p>
              <div v-if="item.explanation" class="explanation">
                <h4>Explanation:</h4>
                <p>{{ item.explanation }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Get Help Now Section -->
    <section class="get-help-section">
      <div class="container">
        <div class="get-help-content">
          <h2>Need Help Now?</h2>
          <p>
            If you're concerned about your gambling habits or those of someone
            close to you, don't wait to seek help.
          </p>
          <div class="help-actions">
            <a href="tel:08001234567" class="help-button primary">
              <i class="fas fa-phone-alt"></i>
              Call Helpline: 0800 123 4567
            </a>
            <button @click="openLiveChat" class="help-button secondary">
              <i class="fas fa-comments"></i>
              Live Chat Support
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Self-Assessment Modal -->
    <div
      v-if="showSelfAssessment"
      class="modal-overlay"
      @click="closeSelfAssessment"
    >
      <div class="modal-container" @click.stop>
        <button class="close-modal" @click="closeSelfAssessment">
          <i class="fas fa-times"></i>
        </button>
        <div class="modal-content">
          <h2>Gambling Self-Assessment</h2>
          <p class="modal-description">
            Answer the following questions honestly to help assess your gambling
            habits. This assessment is based on recognized problem gambling
            screening tools.
          </p>

          <div v-if="!assessmentComplete" class="assessment-questions">
            <div
              v-for="(question, index) in assessmentQuestions"
              :key="index"
              class="assessment-question"
              :class="{ active: currentQuestion === index }"
            >
              <div class="question-number">
                Question {{ index + 1 }} of {{ assessmentQuestions.length }}
              </div>
              <h3>{{ question.text }}</h3>
              <div class="answer-options">
                <button
                  v-for="(option, optionIndex) in question.options"
                  :key="optionIndex"
                  class="answer-option"
                  :class="{ selected: userAnswers[index] === optionIndex }"
                  @click="selectAnswer(index, optionIndex)"
                >
                  {{ option.text }}
                </button>
              </div>
            </div>

            <div class="assessment-navigation">
              <button
                v-if="currentQuestion > 0"
                class="nav-button previous"
                @click="currentQuestion--"
              >
                <i class="fas fa-arrow-left"></i> Previous
              </button>
              <button
                v-if="currentQuestion < assessmentQuestions.length - 1"
                class="nav-button next"
                :disabled="userAnswers[currentQuestion] === undefined"
                @click="currentQuestion++"
              >
                Next <i class="fas fa-arrow-right"></i>
              </button>
              <button
                v-if="currentQuestion === assessmentQuestions.length - 1"
                class="nav-button submit"
                :disabled="!isAssessmentComplete"
                @click="completeAssessment"
              >
                Get Results
              </button>
            </div>
          </div>

          <div v-if="assessmentComplete" class="assessment-results">
            <div class="result-header">
              <div class="result-level" :class="assessmentResult.levelClass">
                {{ assessmentResult.level }}
              </div>
              <h3>{{ assessmentResult.title }}</h3>
            </div>
            <p class="result-description">{{ assessmentResult.description }}</p>
            <div class="result-recommendations">
              <h4>Recommendations</h4>
              <ul>
                <li
                  v-for="(
                    recommendation, index
                  ) in assessmentResult.recommendations"
                  :key="index"
                >
                  {{ recommendation }}
                </li>
              </ul>
            </div>
            <div class="results-actions">
              <button class="results-button primary" @click="navigateToHelp">
                <i class="fas fa-hands-helping"></i>
                <span>Get Help Resources</span>
              </button>
              <button class="results-button secondary" @click="resetAssessment">
                <i class="fas fa-redo"></i>
                <span>Take Assessment Again</span>
              </button>
            </div>
            <div class="results-disclaimer">
              <i class="fas fa-info-circle"></i>
              <p>
                This assessment is a screening tool and not a clinical
                diagnosis. If you're concerned about your gambling habits, we
                recommend speaking with a healthcare professional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Parental Guide Modal -->
    <div
      v-if="showParentalGuide"
      class="modal-overlay"
      @click="closeParentalGuide"
    >
      <div class="modal-container" @click.stop>
        <button class="close-modal" @click="closeParentalGuide">
          <i class="fas fa-times"></i>
        </button>
        <div class="modal-content">
          <h2>Guide for Parents: Preventing Underage Gambling</h2>
          <!-- Content for parental guide modal -->
        </div>
      </div>
    </div>

    <!-- Relapse Prevention Modal -->
    <div
      v-if="showRelapsePrevention"
      class="modal-overlay"
      @click="closeRelapsePrevention"
    >
      <div class="modal-container" @click.stop>
        <button class="close-modal" @click="closeRelapsePrevention">
          <i class="fas fa-times"></i>
        </button>
        <div class="modal-content">
          <h2>Relapse Prevention Strategies</h2>
          <!-- Content for relapse prevention modal -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from "vue";

// Navigation sections
const sections = [
  { title: "Our Commitment", icon: "fas fa-shield-alt" },
  { title: "Recognizing Problems", icon: "fas fa-exclamation-triangle" },
  { title: "Gaming Tools", icon: "fas fa-tools" },
  { title: "Help Resources", icon: "fas fa-hands-helping" },
  { title: "Vulnerable Groups", icon: "fas fa-users" },
  { title: "Myths vs Facts", icon: "fas fa-balance-scale" },
];

// Section references for scrolling
const sectionRefs = ref([]);
const activeSection = ref(0);

// Resource tabs
const resourceTabs = [
  { title: "Helplines", icon: "fas fa-phone-alt" },
  { title: "Support Groups", icon: "fas fa-users" },
  { title: "Therapy Options", icon: "fas fa-user-md" },
  { title: "Self-Help Materials", icon: "fas fa-book" },
];
const activeResourceTab = ref(0);

// Myths and facts
const mythsAndFacts = [
  {
    type: "myth",
    title: "If I keep playing, my luck will eventually turn around",
    content:
      "Many gamblers believe that a losing streak will eventually reverse if they just keep playing.",
    explanation:
      'This is known as the "gamblers fallacy." Each gambling event is independent of previous outcomes. Past results do not influence future ones in games of chance.',
  },
  {
    type: "fact",
    title: "Gambling operators have a mathematical advantage",
    content:
      'All casino games are designed with a "house edge" that ensures the operator makes money over time.',
    explanation:
      'This is why the saying "the house always wins" is accurate in the long run. Games are mathematically designed to pay out less than they take in.',
  },
  {
    type: "myth",
    title: "I have a special system or strategy that guarantees wins",
    content:
      "Some gamblers believe theyve discovered foolproof betting systems that can beat the odds.",
    explanation:
      "No betting system can overcome the mathematical advantage built into gambling games. Systems may appear to work in the short term due to random variance.",
  },
  {
    type: "fact",
    title: "Problem gambling can affect anyone",
    content:
      "Gambling problems can develop in people of any age, gender, income level, or background.",
    explanation:
      "While certain risk factors may increase susceptibility, gambling addiction doesnt discriminate and can affect individuals from all walks of life.",
  },
  {
    type: "myth",
    title: "Problem gamblers gamble every day",
    content:
      "Many people assume that problem gambling means gambling constantly or daily.",
    explanation:
      "Gambling problems are defined by the negative impact on ones life, not by frequency. Someone might gamble infrequently but still experience serious consequences.",
  },
  {
    type: "fact",
    title: "Gambling can be addictive",
    content:
      "Gambling can trigger the brains reward system similar to drugs or alcohol.",
    explanation:
      "Neurological research shows gambling activates the same neural pathways as substance addiction, releasing dopamine and creating powerful reinforcement patterns.",
  },
];
const expandedMythFact = ref(null);

// Helplines data
const helplines = [
  {
    region: "United Kingdom",
    organization: "National Gambling Helpline",
    phone: "0808 8020 133",
    hours: "24 hours, 7 days a week",
    website: "https://www.gamcare.org.uk",
  },
  {
    region: "United States",
    organization: "National Problem Gambling Helpline",
    phone: "1-800-522-4700",
    hours: "24 hours, 7 days a week",
    website: "https://www.ncpgambling.org",
  },
  {
    region: "Australia",
    organization: "Gambling Help Online",
    phone: "1800 858 858",
    hours: "24 hours, 7 days a week",
    website: "https://www.gamblinghelponline.org.au",
  },
  {
    region: "Canada",
    organization: "ConnexOntario",
    phone: "1-866-531-2600",
    hours: "24 hours, 7 days a week",
    website: "https://www.connexontario.ca",
  },
];

// Support groups data
const supportGroups = [
  {
    name: "Gamblers Anonymous",
    logo: "/images/ga-logo.png",
    description:
      "A fellowship of men and women who share their experience, strength, and hope with each other to solve their common problem and help others recover from gambling addiction.",
    website: "https://www.gamblersanonymous.org",
  },
  {
    name: "GamAnon",
    logo: "/images/gamanon-logo.png",
    description:
      "A support group for the family members and friends of problem gamblers, helping them cope with the impact of gambling addiction on their lives.",
    website: "https://www.gam-anon.org",
  },
  {
    name: "Smart Recovery",
    logo: "/images/smart-recovery-logo.png",
    description:
      "A global community of mutual-support groups that use a science-based, self-empowered approach to recovery from addictive behaviors, including gambling.",
    website: "https://www.smartrecovery.org",
  },
];

// Books and self-help materials
const books = [
  {
    title: "Overcoming Gambling",
    author: "Philip Mawer",
    cover: "/images/book-overcoming-gambling.jpg",
    description:
      "A self-help guide using cognitive behavioral techniques to break free from gambling problems.",
  },
  {
    title: "The Gambling Addiction Recovery Book",
    author: "Amanda E. Joyce",
    cover: "/images/book-gambling-addiction-recovery.jpg",
    description:
      "Practical strategies and real-life stories to help gamblers on their journey to recovery.",
  },
];

// Self-help apps
const apps = [
  {
    name: "Gambling Addiction Calendar",
    icon: "/images/app-gambling-calendar.png",
    description:
      "Track your gambling-free days, set goals, and monitor your progress with this recovery-focused app.",
    ios: true,
    android: true,
    iosLink:
      "https://apps.apple.com/app/gambling-addiction-calendar/id123456789",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.gambling.calendar",
  },
  {
    name: "BetBlocker",
    icon: "/images/app-betblocker.png",
    description:
      "A free app that allows you to block access to thousands of gambling websites and applications.",
    ios: true,
    android: true,
    iosLink: "https://apps.apple.com/app/betblocker/id987654321",
    androidLink:
      "https://play.google.com/store/apps/details?id=org.betblocker.app",
  },
];

// PDF guides
const guides = [
  {
    title: "Overcoming Gambling Urges Workbook",
    description:
      "A comprehensive 32-page guide with exercises to help manage gambling urges and develop healthier coping strategies.",
    downloadLink: "/pdfs/overcoming-gambling-urges.pdf",
  },
  {
    title: "Financial Recovery After Gambling",
    description:
      "Practical advice for managing debt and rebuilding financial stability after gambling-related financial problems.",
    downloadLink: "/pdfs/financial-recovery-guide.pdf",
  },
];

// Self-assessment
const showSelfAssessment = ref(false);
const currentQuestion = ref(0);
const assessmentComplete = ref(false);
const userAnswers = ref([]);

// Assessment questions based on problem gambling screening tools
const assessmentQuestions = [
  {
    text: "Have you bet more than you could really afford to lose?",
    options: [
      { text: "Never", value: 0 },
      { text: "Sometimes", value: 1 },
      { text: "Most of the time", value: 2 },
      { text: "Almost always", value: 3 },
    ],
  },
  {
    text: "Have you needed to gamble with larger amounts of money to get the same feeling of excitement?",
    options: [
      { text: "Never", value: 0 },
      { text: "Sometimes", value: 1 },
      { text: "Most of the time", value: 2 },
      { text: "Almost always", value: 3 },
    ],
  },
  {
    text: "When you gambled, did you go back another day to try to win back the money you lost?",
    options: [
      { text: "Never", value: 0 },
      { text: "Sometimes", value: 1 },
      { text: "Most of the time", value: 2 },
      { text: "Almost always", value: 3 },
    ],
  },
  {
    text: "Have you borrowed money or sold anything to get money to gamble?",
    options: [
      { text: "Never", value: 0 },
      { text: "Sometimes", value: 1 },
      { text: "Most of the time", value: 2 },
      { text: "Almost always", value: 3 },
    ],
  },
  {
    text: "Have you felt that you might have a problem with gambling?",
    options: [
      { text: "Never", value: 0 },
      { text: "Sometimes", value: 1 },
      { text: "Most of the time", value: 2 },
      { text: "Almost always", value: 3 },
    ],
  },
  {
    text: "Has gambling caused you any health problems, including stress or anxiety?",
    options: [
      { text: "Never", value: 0 },
      { text: "Sometimes", value: 1 },
      { text: "Most of the time", value: 2 },
      { text: "Almost always", value: 3 },
    ],
  },
  {
    text: "Have people criticized your betting or told you that you had a gambling problem, regardless of whether or not you thought it was true?",
    options: [
      { text: "Never", value: 0 },
      { text: "Sometimes", value: 1 },
      { text: "Most of the time", value: 2 },
      { text: "Almost always", value: 3 },
    ],
  },
  {
    text: "Has your gambling caused any financial problems for you or your household?",
    options: [
      { text: "Never", value: 0 },
      { text: "Sometimes", value: 1 },
      { text: "Most of the time", value: 2 },
      { text: "Almost always", value: 3 },
    ],
  },
  {
    text: "Have you felt guilty about the way you gamble or what happens when you gamble?",
    options: [
      { text: "Never", value: 0 },
      { text: "Sometimes", value: 1 },
      { text: "Most of the time", value: 2 },
      { text: "Almost always", value: 3 },
    ],
  },
];

// Assessment result
const assessmentResult = ref({
  level: "",
  levelClass: "",
  title: "",
  description: "",
  recommendations: [],
});

// Modal states
const showParentalGuide = ref(false);
const showRelapsePrevention = ref(false);

// Check if assessment is complete
const isAssessmentComplete = computed(() => {
  return (
    userAnswers.value.length === assessmentQuestions.length &&
    !userAnswers.value.includes(undefined)
  );
});

// Scroll to section
function scrollToSection(index) {
  activeSection.value = index;

  // Use nextTick to ensure DOM updates before scrolling
  nextTick(() => {
    const element = document.getElementById(
      ["commitment", "recognizing", "tools", "help", "protecting", "myths"][
        index
      ]
    );
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
}

// Toggle myth/fact card
function toggleMythFact(index) {
  expandedMythFact.value = expandedMythFact.value === index ? null : index;
}

// Open and close modals
function openSelfAssessment() {
  showSelfAssessment.value = true;
  document.body.classList.add("modal-open");
}

function closeSelfAssessment() {
  showSelfAssessment.value = false;
  document.body.classList.remove("modal-open");
}

function openParentalGuide() {
  showParentalGuide.value = true;
  document.body.classList.add("modal-open");
}

function closeParentalGuide() {
  showParentalGuide.value = false;
  document.body.classList.remove("modal-open");
}

function openRelapsePrevention() {
  showRelapsePrevention.value = true;
  document.body.classList.add("modal-open");
}

function closeRelapsePrevention() {
  showRelapsePrevention.value = false;
  document.body.classList.remove("modal-open");
}

// Open live chat
function openLiveChat() {
  // This function would integrate with your site's live chat solution
  console.log("Opening live chat...");
  // Example integration with a fictional chat service:
  // window.liveChat.open();
}

// Self-assessment functions
function selectAnswer(questionIndex, optionIndex) {
  userAnswers.value[questionIndex] = optionIndex;
}

function completeAssessment() {
  if (!isAssessmentComplete.value) return;

  // Calculate score
  let totalScore = 0;
  userAnswers.value.forEach((answer, index) => {
    totalScore += assessmentQuestions[index].options[answer].value;
  });

  // Determine risk level based on score
  // Based on PGSI (Problem Gambling Severity Index) scoring
  if (totalScore === 0) {
    assessmentResult.value = {
      level: "Low Risk",
      levelClass: "low-risk",
      title: "Non-Problem Gambling",
      description:
        "Your responses suggest that you have few or no gambling-related issues. Your gambling behavior appears to be recreational and within reasonable limits.",
      recommendations: [
        "Continue monitoring your gambling habits",
        "Set spending and time limits before you play",
        "Remember that gambling should be for entertainment, not income",
        "Stay informed about responsible gambling practices",
      ],
    };
  } else if (totalScore >= 1 && totalScore <= 7) {
    assessmentResult.value = {
      level: "Moderate Risk",
      levelClass: "moderate-risk",
      title: "Some Gambling Issues Present",
      description:
        "Your responses indicate that you may be experiencing some negative consequences from gambling. While you dont appear to have severe problems, certain aspects of your gambling may be cause for concern.",
      recommendations: [
        "Take advantage of gambling operator tools like deposit limits and time-outs",
        "Track your gambling time and spending more carefully",
        "Consider taking a short break from gambling",
        "Reflect on how gambling affects your life, relationships, and finances",
      ],
    };
  } else {
    assessmentResult.value = {
      level: "High Risk",
      levelClass: "high-risk",
      title: "Problem Gambling Indicated",
      description:
        "Your responses suggest that gambling may be causing significant problems in your life. These problems may include financial difficulties, relationship issues, emotional distress, or other negative impacts.",
      recommendations: [
        "Consider speaking with a gambling addiction specialist",
        "Contact a gambling helpline for confidential support",
        "Look into self-exclusion programs with gambling operators",
        "Explore support groups like Gamblers Anonymous",
        "Discuss your concerns with trusted family members or friends",
      ],
    };
  }

  // Set to true to display results
  assessmentComplete.value = true;
}

function resetAssessment() {
  currentQuestion.value = 0;
  userAnswers.value = [];
  assessmentComplete.value = false;
}

function navigateToHelp() {
  closeSelfAssessment();
  scrollToSection(3); // Navigate to Help Resources section
}

// Handle scroll events to update active section
onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  // Initialize empty array with correct length for section refs
  sectionRefs.value = Array(sections.length).fill(null);

  // Reset assessment
  resetAssessment();
});

function handleScroll() {
  const scrollPosition = window.scrollY + 150;

  const sectionIds = [
    "commitment",
    "recognizing",
    "tools",
    "help",
    "protecting",
    "myths",
  ];

  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const section = document.getElementById(sectionIds[i]);

    if (section && section.offsetTop <= scrollPosition) {
      if (activeSection.value !== i) {
        activeSection.value = i;
      }
      break;
    }
  }
}

// Clean up event listeners
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped>
/* Base Styles */
.responsible-gaming-page {
  color: white;
  background-color: #130f1d;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #1a1721 0%, #2c1e38 100%);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 70% 30%,
    rgba(255, 103, 103, 0.15) 0%,
    rgba(76, 0, 112, 0.1) 50%,
    rgba(0, 0, 0, 0) 70%
  );
  z-index: 0;
}

.page-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  position: relative;
  z-index: 1;
}

.page-subtitle {
  font-size: 1.5rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Navigation Section */
.navigation-section {
  background: #1a1721;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.navigation-pills {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.nav-pill {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-pill:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.nav-pill.active {
  background: rgba(255, 103, 103, 0.1);
  color: #ff6767;
  border-color: rgba(255, 103, 103, 0.3);
}

.nav-pill i {
  font-size: 1rem;
}

/* Content Sections */
.content-section {
  padding: 5rem 0;
}

.content-section.bg-darker {
  background-color: #110d1a;
}

.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.section-header p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  margin: 0 auto;
}

/* Commitment Cards */
.commitment-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.commitment-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.commitment-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.05);
}

.card-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(255, 103, 103, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.card-icon i {
  font-size: 2rem;
  color: #ff6767;
}

.commitment-card h3 {
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.commitment-card p {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
}

/* Warning Signs */
.warning-signs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.warning-sign {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.warning-sign:hover {
  background: rgba(255, 255, 255, 0.05);
}

.sign-icon {
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 103, 103, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign-icon i {
  font-size: 1.25rem;
  color: #ff6767;
}

.sign-content {
  flex: 1;
}

.sign-content h3 {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: white;
}

.sign-content p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.self-assessment {
  margin-top: 3.5rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.self-assessment h3 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.self-assessment p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto 1.5rem;
}

.primary-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #ff6767, #ff4b4b);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 14px rgba(255, 75, 75, 0.3);
}

.primary-button i {
  font-size: 1.2rem;
}

/* Tools Grid */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.tool-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.tool-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.05);
}

.tool-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 103, 103, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.tool-icon i {
  font-size: 1.75rem;
  color: #ff6767;
}

.tool-card h3 {
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.tool-card p {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
}

.tool-implementation h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: white;
}

.tool-implementation ul {
  padding-left: 1.5rem;
  margin: 0;
}

.tool-implementation li {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
}

/* Resources Container */
.resources-container {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.resources-tabs {
  display: flex;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.resources-tabs::-webkit-scrollbar {
  display: none;
}

.resource-tab {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.05rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.resource-tab:hover {
  color: white;
  background: rgba(255, 255, 255, 0.05);
}

.resource-tab.active {
  color: #ff6767;
  border-bottom: 3px solid #ff6767;
  background: rgba(255, 103, 103, 0.05);
}

.resource-tab i {
  font-size: 1.2rem;
}

.resources-content {
  padding: 2.5rem;
}

/* Helplines */
.helplines {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.helpline-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.helpline-card:hover {
  background: rgba(255, 255, 255, 0.05);
}

.helpline-region {
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.35rem 0.75rem;
  background: rgba(255, 103, 103, 0.1);
  color: #ff6767;
  border-radius: 50px;
  display: inline-block;
  margin-bottom: 0.25rem;
}

.helpline-org {
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
}

.helpline-phone {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: all 0.3s ease;
}

.helpline-phone:hover {
  color: #ff6767;
}

.helpline-hours {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
}

.helpline-website {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #ff6767;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
}

.helpline-website:hover {
  color: #ff8f8f;
  text-decoration: underline;
}

/* Support Groups */
.support-groups {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.support-group-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.support-group-card:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-5px);
}

.support-group-logo {
  width: 120px;
  height: 120px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}

.support-group-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.support-group-card h3 {
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.support-group-card p {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
}

.support-group-link {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.support-group-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Therapy Options */
.therapy-options {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.therapy-type {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.therapy-type:hover {
  background: rgba(255, 255, 255, 0.05);
}

.therapy-type h3 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.therapy-type h3 i {
  color: #ff6767;
}

.therapy-type p {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.therapy-find-help {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: 1rem;
}

.therapy-find-help h3 {
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.therapy-find-help p {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
}

.therapy-find-help ul {
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.therapy-find-help li {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
}

.therapy-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.therapy-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.therapy-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Self-Help Materials */
.self-help-materials {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.self-help-section h3 {
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: white;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.self-help-books {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.book-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.book-card:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-5px);
}

.book-cover {
  height: 200px;
  overflow: hidden;
}

.book-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.book-info {
  padding: 1.5rem;
}

.book-info h4 {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
}

.book-author {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1rem;
}

.book-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.self-help-apps {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.app-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.app-card:hover {
  background: rgba(255, 255, 255, 0.05);
}

.app-icon {
  flex: 0 0 60px;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  overflow: hidden;
}

.app-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.app-info {
  flex: 1;
}

.app-info h4 {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
}

.app-platforms {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.app-platforms span {
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50px;
  color: rgba(255, 255, 255, 0.7);
}

.app-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
}

.app-links {
  display: flex;
  gap: 0.75rem;
}

.app-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.app-links a:hover {
  background: rgba(255, 255, 255, 0.1);
}

.self-help-guides {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.guide-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.guide-card:hover {
  background: rgba(255, 255, 255, 0.05);
}

.guide-icon {
  flex: 0 0 45px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 103, 103, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.guide-icon i {
  font-size: 1.5rem;
  color: #ff6767;
}

.guide-info {
  flex: 1;
}

.guide-info h4 {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: white;
}

.guide-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
}

.guide-download {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.guide-download:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Vulnerable Groups */
.vulnerable-groups {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.group-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.group-card:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-5px);
}

.group-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 103, 103, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.group-icon i {
  font-size: 1.75rem;
  color: #ff6767;
}

.group-card h3 {
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.group-card p {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
}

.group-card h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: white;
}

.group-card ul {
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.group-card li {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
}

.secondary-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Myths and Facts */
.myths-facts {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.myth-fact-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.myth-fact-card:hover {
  background: rgba(255, 255, 255, 0.05);
}

.card-header {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.myth-fact-badge {
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.35rem 0.75rem;
  border-radius: 50px;
}

.myth-fact-badge.myth {
  background: rgba(240, 52, 52, 0.1);
  color: #f03434;
}

.myth-fact-badge.fact {
  background: rgba(46, 204, 113, 0.1);
  color: #2ecc71;
}

.card-header h3 {
  font-size: 1.15rem;
  font-weight: 600;
  color: white;
  margin: 0;
}

.expand-icon {
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.myth-fact-card.expanded .expand-icon {
  color: white;
}

.card-content {
  max-height: 0;
  overflow: hidden;
  padding: 0 1.5rem;
  transition: all 0.3s ease;
}

.myth-fact-card.expanded .card-content {
  max-height: 500px;
  padding: 0 1.5rem 1.5rem;
}

.card-content p {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
}

.explanation {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1.25rem;
}

.explanation h4 {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
}

.explanation p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

/* Get Help Section */
.get-help-section {
  background: linear-gradient(135deg, #ff6767, #ff4b4b);
  padding: 4rem 0;
  text-align: center;
}

.get-help-content {
  max-width: 700px;
  margin: 0 auto;
}

.get-help-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.get-help-content p {
  font-size: 1.25rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
}

.help-actions {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.help-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.help-button.primary {
  background: white;
  color: #ff4b4b;
  border: none;
}

.help-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.15);
}

.help-button.secondary {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.help-button.secondary:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-3px);
}

/* Self-Assessment Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow-y: auto;
  padding: 2rem 1rem;
}

.modal-container {
  background: #1a1721;
  border-radius: 12px;
  width: 90%;
  max-width: 650px;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
}

.close-modal {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.close-modal:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.modal-content {
  padding: 2.5rem;
}

.modal-content h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.modal-description {
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
}

/* Assessment Questions */
.assessment-questions {
  margin-top: 2rem;
}

.assessment-question {
  display: none;
}

.assessment-question.active {
  display: block;
}

.question-number {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.75rem;
}

.assessment-question h3 {
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: white;
  line-height: 1.5;
}

.answer-options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.answer-option {
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  color: white;
  font-size: 1.05rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
}

.answer-option:hover {
  background: rgba(255, 255, 255, 0.05);
}

.answer-option.selected {
  background: rgba(255, 103, 103, 0.1);
  border-color: rgba(255, 103, 103, 0.3);
  color: #ff6767;
}

.assessment-navigation {
  display: flex;
  justify-content: space-between;
}

.nav-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-button.previous {
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-button.previous:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-button.next,
.nav-button.submit {
  background: rgba(255, 103, 103, 0.1);
  color: #ff6767;
  border: 1px solid rgba(255, 103, 103, 0.3);
}

.nav-button.next:hover,
.nav-button.submit:hover {
  background: rgba(255, 103, 103, 0.2);
}

.nav-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Assessment Results */
.assessment-results {
  padding: 2rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: 2rem;
}

.result-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.result-level {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
}

.result-level.low-risk {
  background: rgba(46, 204, 113, 0.1);
  color: #2ecc71;
}

.result-level.moderate-risk {
  background: rgba(241, 196, 15, 0.1);
  color: #f1c40f;
}

.result-level.high-risk {
  background: rgba(231, 76, 60, 0.1);
  color: #e74c3c;
}

.assessment-results h3 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.result-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
}

.result-recommendations {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.result-recommendations h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.result-recommendations ul {
  padding-left: 1.5rem;
}

.result-recommendations li {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.75rem;
}

.results-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.results-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  justify-content: center;
}

.results-button.primary {
  background: linear-gradient(135deg, #ff6767, #ff4b4b);
  color: white;
  border: none;
}

.results-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 14px rgba(255, 75, 75, 0.3);
}

.results-button.secondary {
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.results-button.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

.results-disclaimer {
  display: flex;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.results-disclaimer i {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.5);
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.results-disclaimer p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

/* Parental Guide Modal Content */
.modal-content section {
  margin-bottom: 2rem;
}

.modal-content h3 {
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.modal-content p {
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
}

.modal-content ul,
.modal-content ol {
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.modal-content li {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
}

.resources-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.resource-item {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.resource-item h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: white;
}

.resource-item p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
}

.resource-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #ff6767;
  text-decoration: none;
}

.resource-link:hover {
  text-decoration: underline;
}

.warning-box {
  background: rgba(231, 76, 60, 0.1);
  border-left: 4px solid #e74c3c;
  padding: 1.25rem;
  border-radius: 0 8px 8px 0;
  margin: 1.5rem 0;
}

.warning-box h4 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #e74c3c;
}

.warning-box p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.tip-box {
  background: rgba(46, 204, 113, 0.1);
  border-left: 4px solid #2ecc71;
  padding: 1.25rem;
  border-radius: 0 8px 8px 0;
  margin: 1.5rem 0;
}

.tip-box h4 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #2ecc71;
}

.tip-box p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.steps-list {
  counter-reset: steps;
  list-style-type: none;
  padding: 0;
  margin: 1.5rem 0;
}

.steps-list li {
  position: relative;
  padding-left: 3rem;
  margin-bottom: 1.5rem;
}

.steps-list li::before {
  counter-increment: steps;
  content: counter(steps);
  position: absolute;
  left: 0;
  top: 0;
  width: 32px;
  height: 32px;
  background: rgba(255, 103, 103, 0.1);
  color: #ff6767;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

/* Relapse Prevention Modal Content */
.strategies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.strategy-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
}

.strategy-card h4 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.strategy-card i {
  color: #ff6767;
}

.strategy-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.action-plan {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2rem;
}

.action-plan h4 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.plan-steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.plan-step {
  display: flex;
  gap: 1.25rem;
}

.step-number {
  flex: 0 0 36px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 103, 103, 0.1);
  color: #ff6767;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.1rem;
}

.step-content {
  flex: 1;
}

.step-content h5 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
}

.step-content p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

/* Responsive Styles */
@media (max-width: 991px) {
  .page-title {
    font-size: 2.75rem;
  }

  .page-subtitle {
    font-size: 1.25rem;
  }

  .section-header h2 {
    font-size: 2.25rem;
  }

  .nav-pill {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }

  .nav-pill i {
    font-size: 0.9rem;
  }

  .tools-grid,
  .vulnerable-groups {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  .help-actions {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 767px) {
  .page-title {
    font-size: 2.25rem;
  }

  .page-subtitle {
    font-size: 1.1rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .commitment-cards,
  .warning-signs {
    grid-template-columns: 1fr;
  }

  .self-help-books,
  .self-help-apps,
  .self-help-guides {
    grid-template-columns: 1fr;
  }

  .nav-pill span {
    display: none;
  }

  .nav-pill i {
    font-size: 1.1rem;
  }

  .results-actions {
    flex-direction: column;
  }

  .modal-content {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 576px) {
  .hero-section {
    padding: 4rem 0;
  }

  .page-title {
    font-size: 2rem;
  }

  .content-section {
    padding: 3rem 0;
  }

  .section-header {
    margin-bottom: 2.5rem;
  }

  .section-header h2 {
    font-size: 1.75rem;
  }

  .warning-sign,
  .commitment-card,
  .tool-card,
  .support-group-card,
  .group-card {
    padding: 1.5rem;
  }

  .navigation-pills {
    gap: 0.5rem;
  }

  .nav-pill {
    padding: 0.5rem;
  }

  .self-assessment h3 {
    font-size: 1.5rem;
  }

  .assessment-question h3 {
    font-size: 1.2rem;
  }

  .answer-option {
    padding: 0.875rem 1.25rem;
  }
}

/* Classes for modal open state */
body.modal-open {
  overflow: hidden;
}
</style>
