<template>
  <section id="complaint-form" class="complaint-form-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          Submit a <span class="highlight">Complaint</span>
        </h2>
        <p class="section-subtitle">
          Our mediation service helps resolve disputes between players and
          gambling operators
        </p>
      </div>

      <!-- Form progress indicator -->
      <div class="form-progress">
        <div
          v-for="(step, index) in formSteps"
          :key="index"
          class="progress-step"
          :class="{
            active: currentStep === index,
            completed: currentStep > index,
            clickable: currentStep > index,
          }"
          @click="handleStepClick(index)"
        >
          <div class="step-indicator">
            <template v-if="currentStep > index">
              <i class="fas fa-check"></i>
            </template>
            <template v-else>
              {{ index + 1 }}
            </template>
          </div>
          <div class="step-label">{{ step.label }}</div>
        </div>
      </div>

      <!-- Form container -->
      <div class="form-container">
        <div class="form-card">
          <!-- Step 1: Casino Information -->
          <div v-if="currentStep === 0" class="form-step">
            <div class="step-header">
              <h3 class="step-title">Casino Information</h3>
              <p class="step-description">
                Please provide details about the gambling operator you're filing
                a complaint against.
              </p>
            </div>

            <div class="form-fields">
              <div class="form-field">
                <label for="casino-name"
                  >Casino Name <span class="required">*</span></label
                >
                <div class="field-with-icon">
                  <i class="fas fa-building"></i>
                  <input
                    id="casino-name"
                    v-model="formData.casinoName"
                    type="text"
                    placeholder="Enter the name of the casino or gambling site"
                    required
                  />
                </div>
                <span v-if="errors.casinoName" class="error-message">{{
                  errors.casinoName
                }}</span>
              </div>

              <div class="form-field">
                <label for="casino-website"
                  >Casino Website <span class="required">*</span></label
                >
                <div class="field-with-icon">
                  <i class="fas fa-globe"></i>
                  <input
                    id="casino-website"
                    v-model="formData.casinoWebsite"
                    type="url"
                    placeholder="https://www.example.com"
                    required
                  />
                </div>
                <span v-if="errors.casinoWebsite" class="error-message">{{
                  errors.casinoWebsite
                }}</span>
              </div>

              <div class="form-field">
                <label for="licensing-authority"
                  >Licensing Authority (if known)</label
                >
                <div class="field-with-icon">
                  <i class="fas fa-certificate"></i>
                  <select
                    id="licensing-authority"
                    v-model="formData.licensingAuthority"
                  >
                    <option value="">Select licensing authority</option>
                    <option value="ukgc">UK Gambling Commission</option>
                    <option value="mga">Malta Gaming Authority</option>
                    <option value="gibraltar">
                      Gibraltar Regulatory Authority
                    </option>
                    <option value="alderney">
                      Alderney Gambling Control Commission
                    </option>
                    <option value="isle_of_man">
                      Isle of Man Gambling Supervision Commission
                    </option>
                    <option value="kahnawake">
                      Kahnawake Gaming Commission
                    </option>
                    <option value="other">Other</option>
                    <option value="unknown">I don't know</option>
                  </select>
                </div>
              </div>

              <div
                v-if="formData.licensingAuthority === 'other'"
                class="form-field"
              >
                <label for="other-authority">Please specify authority</label>
                <div class="field-with-icon">
                  <i class="fas fa-edit"></i>
                  <input
                    id="other-authority"
                    v-model="formData.otherAuthority"
                    type="text"
                    placeholder="Enter the licensing authority name"
                  />
                </div>
              </div>

              <div class="form-field">
                <label for="account-name"
                  >Your Account Username/Email
                  <span class="required">*</span></label
                >
                <div class="field-with-icon">
                  <i class="fas fa-user"></i>
                  <input
                    id="account-name"
                    v-model="formData.accountIdentifier"
                    type="text"
                    placeholder="The username or email you use to log in to the casino"
                    required
                  />
                </div>
                <span v-if="errors.accountIdentifier" class="error-message">{{
                  errors.accountIdentifier
                }}</span>
                <span class="field-hint"
                  >This helps the casino identify your account during the
                  resolution process.</span
                >
              </div>
            </div>

            <div class="form-help-box">
              <div class="help-icon">
                <i class="fas fa-question-circle"></i>
              </div>
              <div class="help-content">
                <h4>Not sure about the licensing information?</h4>
                <p>
                  Licensing details are typically found in the footer of the
                  casino's website. If you can't find this information, select
                  "I don't know" and we'll help identify it.
                </p>
              </div>
            </div>

            <div class="form-actions">
              <div class="form-action-left">
                <button
                  type="button"
                  class="save-draft-button"
                  @click="saveDraft"
                >
                  <i class="fas fa-save"></i>
                  <span>Save as Draft</span>
                </button>
              </div>
              <div class="form-action-right">
                <button
                  type="button"
                  class="next-button"
                  @click="validateAndProceed"
                >
                  <span>Continue</span>
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Step 2: Complaint Details -->
          <div v-if="currentStep === 1" class="form-step">
            <div class="step-header">
              <h3 class="step-title">Complaint Details</h3>
              <p class="step-description">
                Please provide specific information about your issue. The more
                details you include, the better we can help resolve your
                dispute.
              </p>
            </div>

            <div class="form-fields">
              <div class="form-field">
                <label for="complaint-type"
                  >Type of Issue <span class="required">*</span></label
                >
                <div class="field-with-icon">
                  <i class="fas fa-tag"></i>
                  <select
                    id="complaint-type"
                    v-model="formData.complaintType"
                    required
                  >
                    <option value="">Select the type of issue</option>
                    <option value="withdrawal">Withdrawal Issues</option>
                    <option value="account">Account Limitations/Closure</option>
                    <option value="bonus">Bonus/Promotion Disputes</option>
                    <option value="game">Game Malfunction/Fairness</option>
                    <option value="kyc">Verification/KYC Problems</option>
                    <option value="deposit">Deposit Problems</option>
                    <option value="support">Poor Customer Service</option>
                    <option value="responsible">
                      Responsible Gambling Tools
                    </option>
                    <option value="other">Other Issue</option>
                  </select>
                </div>
                <span v-if="errors.complaintType" class="error-message">{{
                  errors.complaintType
                }}</span>
              </div>

              <div v-if="formData.complaintType === 'other'" class="form-field">
                <label for="other-issue">Please specify issue type</label>
                <div class="field-with-icon">
                  <i class="fas fa-edit"></i>
                  <input
                    id="other-issue"
                    v-model="formData.otherIssueType"
                    type="text"
                    placeholder="Briefly describe the type of issue"
                  />
                </div>
              </div>

              <div class="form-field-group">
                <div class="form-field-title">Date and Financial Details</div>

                <div class="form-field-row">
                  <div class="form-field">
                    <label for="incident-date"
                      >When did this issue occur?
                      <span class="required">*</span></label
                    >
                    <div class="field-with-icon">
                      <i class="fas fa-calendar-alt"></i>
                      <input
                        id="incident-date"
                        v-model="formData.incidentDate"
                        type="date"
                        required
                        :max="currentDate"
                      />
                    </div>
                    <span v-if="errors.incidentDate" class="error-message">{{
                      errors.incidentDate
                    }}</span>
                  </div>

                  <div class="form-field">
                    <label for="amount-disputed"
                      >Amount in Dispute (if applicable)</label
                    >
                    <div class="field-with-icon money-field">
                      <i class="fas fa-dollar-sign"></i>
                      <input
                        id="amount-disputed"
                        v-model="formData.amountDisputed"
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="Enter amount"
                      />
                      <select
                        v-model="formData.currency"
                        class="currency-select"
                      >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="CAD">CAD</option>
                        <option value="AUD">AUD</option>
                        <option value="OTHER">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-field">
                <label for="issue-description"
                  >Detailed Description <span class="required">*</span></label
                >
                <p class="field-description">
                  Please provide a clear, chronological description of what
                  happened. Include relevant dates, communications, and specific
                  details about the issue.
                </p>
                <div class="field-with-icon textarea-field">
                  <i class="fas fa-align-left"></i>
                  <textarea
                    id="issue-description"
                    v-model="formData.issueDescription"
                    rows="6"
                    placeholder="Explain your issue in detail..."
                    required
                  ></textarea>
                </div>
                <div
                  class="character-counter"
                  :class="{ warning: formData.issueDescription.length > 3000 }"
                >
                  {{ formData.issueDescription.length }}/4000 characters
                </div>
                <span v-if="errors.issueDescription" class="error-message">{{
                  errors.issueDescription
                }}</span>
              </div>

              <div class="form-field">
                <label for="attempted-resolution"
                  >Steps Already Taken to Resolve
                  <span class="required">*</span></label
                >
                <p class="field-description">
                  Have you tried to resolve this with the casino directly?
                  Please describe any attempts you've made and their response.
                </p>
                <div class="radio-options">
                  <div class="radio-option">
                    <input
                      type="radio"
                      id="contacted-yes"
                      value="yes"
                      v-model="formData.contactedOperator"
                      name="contacted-operator"
                    />
                    <label for="contacted-yes"
                      >Yes, I've already contacted the casino</label
                    >
                  </div>
                  <div class="radio-option">
                    <input
                      type="radio"
                      id="contacted-no"
                      value="no"
                      v-model="formData.contactedOperator"
                      name="contacted-operator"
                    />
                    <label for="contacted-no"
                      >No, I haven't contacted them yet</label
                    >
                  </div>
                </div>
                <span v-if="errors.contactedOperator" class="error-message">{{
                  errors.contactedOperator
                }}</span>

                <div
                  v-if="formData.contactedOperator === 'yes'"
                  class="conditional-field"
                >
                  <div class="field-with-icon textarea-field">
                    <i class="fas fa-comment-dots"></i>
                    <textarea
                      id="resolution-attempts"
                      v-model="formData.resolutionAttempts"
                      rows="4"
                      placeholder="Describe how you tried to resolve this issue with the operator, including dates of contact and their response..."
                    ></textarea>
                  </div>
                  <span
                    v-if="errors.resolutionAttempts"
                    class="error-message"
                    >{{ errors.resolutionAttempts }}</span
                  >
                </div>

                <div
                  v-if="formData.contactedOperator === 'no'"
                  class="info-alert"
                >
                  <i class="fas fa-info-circle"></i>
                  <span
                    >Most casinos require that you attempt to resolve issues
                    with them directly before third-party mediation. We still
                    accept your complaint, but resolution may be faster if you
                    contact them first.</span
                  >
                </div>
              </div>

              <div class="form-field">
                <label for="desired-outcome"
                  >Desired Resolution <span class="required">*</span></label
                >
                <p class="field-description">
                  What outcome are you seeking? Be specific about what you
                  consider a fair resolution.
                </p>
                <div class="field-with-icon textarea-field">
                  <i class="fas fa-bullseye"></i>
                  <textarea
                    id="desired-outcome"
                    v-model="formData.desiredOutcome"
                    rows="3"
                    placeholder="Describe what you consider a fair resolution..."
                    required
                  ></textarea>
                </div>
                <span v-if="errors.desiredOutcome" class="error-message">{{
                  errors.desiredOutcome
                }}</span>
              </div>
            </div>

            <!-- Issue-specific guidance based on selection -->
            <div
              v-if="
                formData.complaintType && formData.complaintType !== 'other'
              "
              class="issue-guidance"
            >
              <div class="guidance-header">
                <i class="fas fa-lightbulb"></i>
                <h4>Tips for {{ getComplaintTypeLabel() }} Issues</h4>
              </div>
              <div class="guidance-content">
                <ul>
                  <template v-if="formData.complaintType === 'withdrawal'">
                    <li>
                      Include the exact date of withdrawal request and current
                      status
                    </li>
                    <li>
                      Mention if you've completed all verification requirements
                    </li>
                    <li>
                      Note any specific reasons the casino provided for delays
                    </li>
                    <li>
                      Include transaction IDs and payment method details if
                      available
                    </li>
                  </template>
                  <template v-else-if="formData.complaintType === 'account'">
                    <li>
                      Specify exactly when and how you were notified about the
                      limitation/closure
                    </li>
                    <li>Include the exact reason provided by the casino</li>
                    <li>
                      Mention if you have any balance trapped in the account
                    </li>
                    <li>
                      Detail any unusual activity that might have triggered the
                      action
                    </li>
                  </template>
                  <template v-else-if="formData.complaintType === 'bonus'">
                    <li>Include the exact name and terms of the promotion</li>
                    <li>
                      Specify which terms you believe were met or were unclear
                    </li>
                    <li>Include dates of bonus claim and when issues arose</li>
                    <li>Note if the terms changed after you opted in</li>
                  </template>
                  <template v-else-if="formData.complaintType === 'game'">
                    <li>Provide the exact game name and provider</li>
                    <li>
                      Specify the date, time and exact round ID of the incident
                    </li>
                    <li>
                      Describe exactly what happened vs. what you expected
                    </li>
                    <li>Include any error messages that appeared</li>
                  </template>
                  <template v-else-if="formData.complaintType === 'kyc'">
                    <li>List all documents you've submitted and when</li>
                    <li>
                      Include any feedback received about your verification
                    </li>
                    <li>Mention how long the process has been ongoing</li>
                    <li>
                      Note if you've been asked repeatedly for the same
                      documents
                    </li>
                  </template>
                  <template v-else-if="formData.complaintType === 'deposit'">
                    <li>
                      Include the payment method, amount, and transaction ID
                    </li>
                    <li>Specify if the funds were taken but not credited</li>
                    <li>
                      Include any confirmation emails or screenshots of the
                      transaction
                    </li>
                    <li>
                      Mention if this is a first-time deposit or recurring issue
                    </li>
                  </template>
                  <template v-else-if="formData.complaintType === 'support'">
                    <li>
                      Detail specific interactions with support agents (dates,
                      times)
                    </li>
                    <li>
                      Describe what specific promises were made but not kept
                    </li>
                    <li>
                      Mention if you were unable to reach support and how you
                      tried
                    </li>
                    <li>
                      Note any contradictory information provided by different
                      agents
                    </li>
                  </template>
                  <template
                    v-else-if="formData.complaintType === 'responsible'"
                  >
                    <li>
                      Specify which responsible gambling tool was not
                      functioning properly
                    </li>
                    <li>
                      Include dates when you set limits or requested exclusion
                    </li>
                    <li>Detail what happened after your request was made</li>
                    <li>
                      Mention if you received marketing during a self-exclusion
                      period
                    </li>
                  </template>
                </ul>
              </div>
            </div>

            <!-- Related terms and regulations -->
            <div class="related-terms">
              <div class="related-terms-header">
                <i class="fas fa-gavel"></i>
                <h4>Relevant Regulations</h4>
              </div>
              <div class="related-terms-content">
                <p>
                  The following regulations may apply to your complaint. We'll
                  evaluate your case based on these and other applicable
                  standards:
                </p>
                <ul class="regulations-list">
                  <li
                    v-if="
                      ['withdrawal', 'deposit'].includes(formData.complaintType)
                    "
                  >
                    <span class="regulation-name">Payment Processing:</span>
                    <span class="regulation-text"
                      >Operators must process withdrawals within their stated
                      timeframes without unreasonable delays once verification
                      is complete.</span
                    >
                  </li>
                  <li v-if="['bonus'].includes(formData.complaintType)">
                    <span class="regulation-name">Promotional Terms:</span>
                    <span class="regulation-text"
                      >Bonus terms must be clear, fair, and not misleadingly
                      advertised. Terms cannot be changed after a player has
                      opted in.</span
                    >
                  </li>
                  <li v-if="['game'].includes(formData.complaintType)">
                    <span class="regulation-name">Game Fairness:</span>
                    <span class="regulation-text"
                      >Games must operate according to their certified RNG and
                      published return-to-player percentages. Technical
                      malfunctions should be clearly defined in terms.</span
                    >
                  </li>
                  <li
                    v-if="['account', 'kyc'].includes(formData.complaintType)"
                  >
                    <span class="regulation-name">Account Management:</span>
                    <span class="regulation-text"
                      >Operators must have valid grounds for account
                      restrictions and provide clear explanations. Verification
                      procedures must be reasonable.</span
                    >
                  </li>
                  <li v-if="['responsible'].includes(formData.complaintType)">
                    <span class="regulation-name">Responsible Gambling:</span>
                    <span class="regulation-text"
                      >Self-exclusion, deposit limits, and other responsible
                      gambling tools must be implemented immediately upon
                      request and maintained for the specified duration.</span
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div class="form-actions">
              <div class="form-action-left">
                <button
                  type="button"
                  class="back-button"
                  @click="goToPreviousStep"
                >
                  <i class="fas fa-arrow-left"></i>
                  <span>Back</span>
                </button>
              </div>
              <div class="form-action-right">
                <button
                  type="button"
                  class="save-draft-button"
                  @click="saveDraft"
                >
                  <i class="fas fa-save"></i>
                  <span>Save as Draft</span>
                </button>
                <button
                  type="button"
                  class="next-button"
                  @click="validateAndProceed"
                >
                  <span>Continue</span>
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Step 3: Evidence Upload -->
          <div v-if="currentStep === 2" class="form-step">
            <div class="step-header">
              <h3 class="step-title">Evidence Upload</h3>
              <p class="step-description">
                Supporting evidence strengthens your case and speeds up
                resolution. Upload screenshots, emails, chat logs, or any other
                documentation related to your complaint.
              </p>
            </div>

            <div class="evidence-intro">
              <div class="evidence-icon">
                <i class="fas fa-file-alt"></i>
              </div>
              <div class="evidence-intro-content">
                <h4>Why Evidence Matters</h4>
                <p>
                  Complaints with supporting evidence are
                  <strong>3x more likely</strong> to be resolved successfully.
                  Evidence helps us verify details and present a stronger case
                  to the operator.
                </p>
              </div>
            </div>

            <div class="file-uploader">
              <div class="file-uploader-header">
                <h4>Upload Files</h4>
                <div class="file-limits">
                  <span>Max 5 files • 5MB each • JPG, PNG, PDF</span>
                </div>
              </div>

              <div
                class="upload-dropzone"
                :class="{ 'drag-over': isDragging }"
                @dragover.prevent="handleDragOver"
                @dragleave.prevent="handleDragLeave"
                @drop.prevent="handleFileDrop"
              >
                <div class="upload-inner">
                  <div class="upload-icon">
                    <i class="fas fa-cloud-upload-alt"></i>
                  </div>
                  <div class="upload-text">
                    <p>
                      Drag and drop files here, or <span>browse files</span>
                    </p>
                    <p class="upload-hint">
                      Accepted formats: JPG, PNG, PDF (max 5MB per file)
                    </p>
                  </div>
                  <input
                    type="file"
                    id="file-input"
                    ref="fileInput"
                    multiple
                    accept=".jpg,.jpeg,.png,.pdf"
                    @change="handleFileSelection"
                    class="hidden-file-input"
                  />
                  <button
                    type="button"
                    class="browse-button"
                    @click="triggerFileInput"
                  >
                    <i class="fas fa-folder-open"></i>
                    <span>Browse Files</span>
                  </button>
                </div>
              </div>

              <div v-if="errors.files" class="error-message file-error">
                {{ errors.files }}
              </div>

              <div v-if="uploadedFiles.length > 0" class="uploaded-files">
                <div class="uploaded-files-header">
                  <h5>Uploaded Files ({{ uploadedFiles.length }}/5)</h5>
                </div>
                <div class="files-list">
                  <div
                    v-for="(file, index) in uploadedFiles"
                    :key="index"
                    class="file-item"
                    :class="{ uploading: file.uploading }"
                  >
                    <div class="file-icon">
                      <i
                        v-if="file.type.includes('image')"
                        class="fas fa-file-image"
                      ></i>
                      <i
                        v-else-if="file.type.includes('pdf')"
                        class="fas fa-file-pdf"
                      ></i>
                      <i v-else class="fas fa-file"></i>
                    </div>
                    <div class="file-details">
                      <div class="file-info">
                        <div class="file-name">{{ file.name }}</div>
                        <div class="file-meta">
                          <span>{{ formatFileSize(file.size) }}</span>
                          <span class="file-status">{{
                            file.uploading ? "Uploading..." : "Uploaded"
                          }}</span>
                        </div>
                      </div>
                      <div v-if="file.uploading" class="upload-progress">
                        <div
                          class="progress-bar"
                          :style="{ width: `${file.progress}%` }"
                        ></div>
                      </div>
                      <div class="file-description-container">
                        <input
                          type="text"
                          v-model="file.description"
                          placeholder="Describe this file (e.g., 'Chat with support on May 5th')"
                          class="file-description-input"
                        />
                      </div>
                    </div>
                    <div class="file-actions">
                      <button
                        type="button"
                        class="file-preview-button"
                        @click="previewFile(file)"
                        v-if="!file.uploading && file.type.includes('image')"
                      >
                        <i class="fas fa-eye"></i>
                      </button>
                      <button
                        type="button"
                        class="file-delete-button"
                        @click="removeFile(index)"
                        :disabled="file.uploading"
                      >
                        <i class="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="evidence-types">
                <div class="evidence-types-header">
                  <h4>
                    Recommended Evidence for
                    {{ getComplaintTypeLabel() }} Issues
                  </h4>
                </div>
                <div class="evidence-types-content">
                  <div class="evidence-type-grid">
                    <template v-if="formData.complaintType === 'withdrawal'">
                      <div class="evidence-type">
                        <div class="evidence-type-icon">
                          <i class="fas fa-receipt"></i>
                        </div>
                        <div class="evidence-type-name">
                          Withdrawal Request Confirmation
                        </div>
                      </div>
                      <div class="evidence-type">
                        <div class="evidence-type-icon">
                          <i class="fas fa-comments"></i>
                        </div>
                        <div class="evidence-type-name">
                          Customer Support Chat Logs
                        </div>
                      </div>
                      <div class="evidence-type">
                        <div class="evidence-type-icon">
                          <i class="fas fa-calendar-check"></i>
                        </div>
                        <div class="evidence-type-name">
                          Account Transaction History
                        </div>
                      </div>
                      <div class="evidence-type">
                        <div class="evidence-type-icon">
                          <i class="fas fa-id-card"></i>
                        </div>
                        <div class="evidence-type-name">
                          Verification Documents Submitted
                        </div>
                      </div>
                    </template>
                    <template v-else-if="formData.complaintType === 'account'">
                      <div class="evidence-type">
                        <div class="evidence-type-icon">
                          <i class="fas fa-envelope"></i>
                        </div>
                        <div class="evidence-type-name">
                          Account Closure/Limitation Email
                        </div>
                      </div>
                      <div class="evidence-type">
                        <div class="evidence-type-icon">
                          <i class="fas fa-comments"></i>
                        </div>
                        <div class="evidence-type-name">
                          Support Conversations
                        </div>
                      </div>
                      <div class="evidence-type">
                        <div class="evidence-type-icon">
                          <i class="fas fa-history"></i>
                        </div>
                        <div class="evidence-type-name">
                          Account Activity History
                        </div>
                      </div>
                      <div class="evidence-type">
                        <div class="evidence-type-icon">
                          <i class="fas fa-user-check"></i>
                        </div>
                        <div class="evidence-type-name">
                          Identity Verification Proof
                        </div>
                      </div>
                    </template>
                    <template v-else-if="formData.complaintType === 'bonus'">
                      <div class="evidence-type">
                        <div class="evidence-type-icon">
                          <i class="fas fa-gift"></i>
                        </div>
                        <div class="evidence-type-name">
                          Bonus Terms & Conditions
                        </div>
                      </div>
                      <div class="evidence-type">
                        <div class="evidence-type-icon">
                          <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="evidence-type-name">Bonus Confirmation</div>
                      </div>
                      <div class="evidence-type">
                        <div class="evidence-type-icon">
                          <i class="fas fa-gamepad"></i>
                        </div>
                        <div class="evidence-type-name">Gameplay History</div>
                      </div>
                      <div class="evidence-type">
                        <div class="evidence-type-icon">
                          <i class="fas fa-calculator"></i>
                        </div>
                        <div class="evidence-type-name">
                          Wagering Requirement Progress
                        </div>
                      </div>
                    </template>
                    <template v-else-if="formData.complaintType === 'game'">
                      <div class="evidence-type">
                        <div class="evidence-type-icon">
                          <i class="fas fa-dice"></i>
                        </div>
                        <div class="evidence-type-name">
                          Game Round Screenshots
                        </div>
                      </div>
                      <div class="evidence-type">
                        <div class="evidence-type-icon">
                          <i class="fas fa-exclamation-circle"></i>
                        </div>
                        <div class="evidence-type-name">Error Messages</div>
                      </div>
                      <div class="evidence-type">
                        <div class="evidence-type-icon">
                          <i class="fas fa-history"></i>
                        </div>
                        <div class="evidence-type-name">
                          Game Transaction History
                        </div>
                      </div>
                      <div class="evidence-type">
                        <div class="evidence-type-icon">
                          <i class="fas fa-video"></i>
                        </div>
                        <div class="evidence-type-name">
                          Video Recording (if available)
                        </div>
                      </div>
                    </template>
                    <template v-else>
                      <div class="evidence-type">
                        <div class="evidence-type-icon">
                          <i class="fas fa-envelope"></i>
                        </div>
                        <div class="evidence-type-name">
                          Email Correspondence
                        </div>
                      </div>
                      <div class="evidence-type">
                        <div class="evidence-type-icon">
                          <i class="fas fa-comments"></i>
                        </div>
                        <div class="evidence-type-name">Support Chat Logs</div>
                      </div>
                      <div class="evidence-type">
                        <div class="evidence-type-icon">
                          <i class="fas fa-file-alt"></i>
                        </div>
                        <div class="evidence-type-name">Terms & Conditions</div>
                      </div>
                      <div class="evidence-type">
                        <div class="evidence-type-icon">
                          <i class="fas fa-history"></i>
                        </div>
                        <div class="evidence-type-name">
                          Account Activity Screenshots
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </div>

              <div class="no-evidence-container">
                <div class="no-evidence-checkbox">
                  <input
                    type="checkbox"
                    id="no-evidence"
                    v-model="formData.noEvidence"
                  />
                  <label for="no-evidence"
                    >I don't have any supporting evidence to upload</label
                  >
                </div>
                <div v-if="formData.noEvidence" class="no-evidence-note">
                  <i class="fas fa-info-circle"></i>
                  <p>
                    You can proceed without evidence, but this may limit our
                    ability to mediate effectively. If you later find relevant
                    documentation, you can add it to your case.
                  </p>
                </div>
              </div>
            </div>

            <!-- File preview modal -->
            <div v-if="previewModal.visible" class="file-preview-modal">
              <div class="modal-overlay" @click="closePreview"></div>
              <div class="modal-container">
                <div class="modal-header">
                  <h4>{{ previewModal.file?.name }}</h4>
                  <button
                    type="button"
                    class="modal-close"
                    @click="closePreview"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </div>
                <div class="modal-content">
                  <img
                    v-if="previewModal.file?.type.includes('image')"
                    :src="previewModal.url"
                    alt="Preview"
                    class="preview-image"
                  />
                </div>
              </div>
            </div>

            <div class="form-actions">
              <div class="form-action-left">
                <button
                  type="button"
                  class="back-button"
                  @click="goToPreviousStep"
                >
                  <i class="fas fa-arrow-left"></i>
                  <span>Back</span>
                </button>
              </div>
              <div class="form-action-right">
                <button
                  type="button"
                  class="save-draft-button"
                  @click="saveDraft"
                >
                  <i class="fas fa-save"></i>
                  <span>Save as Draft</span>
                </button>
                <button
                  type="button"
                  class="next-button"
                  @click="validateAndProceed"
                >
                  <span>Continue</span>
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Step 4: User Information -->
          <div v-if="currentStep === 3" class="form-step">
            <div class="step-header">
              <h3 class="step-title">Your Information</h3>
              <p class="step-description">
                Please provide your contact details so we can communicate with
                you about your complaint and its resolution.
              </p>
            </div>

            <div class="privacy-notice">
              <div class="notice-icon">
                <i class="fas fa-user-shield"></i>
              </div>
              <div class="notice-content">
                <h4>Privacy Assurance</h4>
                <p>
                  Your personal information is protected under our
                  <a href="#" @click.prevent="viewPrivacyPolicy"
                    >Privacy Policy</a
                  >. We only share necessary details with the casino to verify
                  and resolve your complaint.
                </p>
              </div>
            </div>

            <div class="form-fields">
              <div class="form-field-row">
                <div class="form-field">
                  <label for="first-name"
                    >First Name <span class="required">*</span></label
                  >
                  <div class="field-with-icon">
                    <i class="fas fa-user"></i>
                    <input
                      id="first-name"
                      v-model="formData.firstName"
                      type="text"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <span v-if="errors.firstName" class="error-message">{{
                    errors.firstName
                  }}</span>
                </div>

                <div class="form-field">
                  <label for="last-name"
                    >Last Name <span class="required">*</span></label
                  >
                  <div class="field-with-icon">
                    <i class="fas fa-user"></i>
                    <input
                      id="last-name"
                      v-model="formData.lastName"
                      type="text"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                  <span v-if="errors.lastName" class="error-message">{{
                    errors.lastName
                  }}</span>
                </div>
              </div>

              <div class="form-field">
                <label for="email"
                  >Email Address <span class="required">*</span></label
                >
                <div class="field-with-icon">
                  <i class="fas fa-envelope"></i>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <span v-if="errors.email" class="error-message">{{
                  errors.email
                }}</span>
                <span class="field-hint"
                  >Case updates will be sent to this email address.</span
                >
              </div>

              <div class="form-field">
                <label for="phone">Phone Number</label>
                <div class="field-with-icon">
                  <i class="fas fa-phone-alt"></i>
                  <input
                    id="phone"
                    v-model="formData.phone"
                    type="tel"
                    placeholder="+1 (000) 000-0000"
                  />
                </div>
                <span v-if="errors.phone" class="error-message">{{
                  errors.phone
                }}</span>
                <span class="field-hint"
                  >Optional. We'll only call if email communication fails.</span
                >
              </div>

              <div class="form-field">
                <label for="country"
                  >Country of Residence <span class="required">*</span></label
                >
                <div class="field-with-icon">
                  <i class="fas fa-globe-americas"></i>
                  <select id="country" v-model="formData.country" required>
                    <option value="">Select your country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="ES">Spain</option>
                    <option value="IT">Italy</option>
                    <option value="NL">Netherlands</option>
                    <option value="SE">Sweden</option>
                    <option value="NO">Norway</option>
                    <option value="FI">Finland</option>
                    <option value="DK">Denmark</option>
                    <option value="JP">Japan</option>
                    <option value="BR">Brazil</option>
                    <option value="MX">Mexico</option>
                    <option value="IN">India</option>
                    <option value="ZA">South Africa</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
                <span v-if="errors.country" class="error-message">{{
                  errors.country
                }}</span>
              </div>

              <div v-if="formData.country === 'OTHER'" class="form-field">
                <label for="other-country">Please specify country</label>
                <div class="field-with-icon">
                  <i class="fas fa-flag"></i>
                  <input
                    id="other-country"
                    v-model="formData.otherCountry"
                    type="text"
                    placeholder="Enter your country name"
                  />
                </div>
                <span v-if="errors.otherCountry" class="error-message">{{
                  errors.otherCountry
                }}</span>
              </div>

              <div class="form-field">
                <label
                  >Preferred Contact Method
                  <span class="required">*</span></label
                >
                <div class="radio-options contact-options">
                  <div class="radio-option">
                    <input
                      type="radio"
                      id="contact-email"
                      value="email"
                      v-model="formData.preferredContact"
                      name="preferred-contact"
                    />
                    <label for="contact-email">Email</label>
                  </div>
                  <div class="radio-option">
                    <input
                      type="radio"
                      id="contact-phone"
                      value="phone"
                      v-model="formData.preferredContact"
                      name="preferred-contact"
                    />
                    <label for="contact-phone">Phone</label>
                  </div>
                </div>
                <span v-if="errors.preferredContact" class="error-message">{{
                  errors.preferredContact
                }}</span>
                <span
                  v-if="
                    formData.preferredContact === 'phone' && !formData.phone
                  "
                  class="error-message"
                >
                  Please provide a phone number if selecting phone as your
                  preferred contact method.
                </span>
              </div>

              <div class="form-field">
                <label>Case Updates <span class="required">*</span></label>
                <div class="checkbox-options">
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="update-status"
                      v-model="formData.updatePreferences"
                      value="status"
                    />
                    <label for="update-status">Status changes to my case</label>
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="update-messages"
                      v-model="formData.updatePreferences"
                      value="messages"
                    />
                    <label for="update-messages"
                      >Messages from the operator</label
                    >
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="update-resolution"
                      v-model="formData.updatePreferences"
                      value="resolution"
                    />
                    <label for="update-resolution">Resolution proposals</label>
                  </div>
                </div>
                <span v-if="errors.updatePreferences" class="error-message">{{
                  errors.updatePreferences
                }}</span>
              </div>

              <div class="notification-settings">
                <h4>Notification Settings</h4>
                <div class="form-field">
                  <div class="toggle-switch">
                    <input
                      type="checkbox"
                      id="email-updates"
                      v-model="formData.emailUpdates"
                    />
                    <label for="email-updates"></label>
                    <span class="toggle-label">Email notifications</span>
                  </div>
                  <span class="field-hint"
                    >Receive case updates via email (recommended)</span
                  >
                </div>
                <div class="form-field">
                  <div class="toggle-switch">
                    <input
                      type="checkbox"
                      id="allow-marketing"
                      v-model="formData.allowMarketing"
                    />
                    <label for="allow-marketing"></label>
                    <span class="toggle-label">Marketing communications</span>
                  </div>
                  <span class="field-hint"
                    >Receive helpful resources, guides and news about gambling
                    regulations</span
                  >
                </div>
              </div>

              <div class="form-field language-field">
                <label for="language">Preferred Language</label>
                <div class="field-with-icon">
                  <i class="fas fa-language"></i>
                  <select id="language" v-model="formData.preferredLanguage">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                    <option value="pt">Portuguese</option>
                  </select>
                </div>
                <span class="field-hint"
                  >All communications will be in this language when
                  available.</span
                >
              </div>

              <div class="additional-info">
                <h4>Additional Information</h4>
                <p>
                  Is there anything else you'd like us to know about your
                  situation?
                </p>
                <div class="field-with-icon textarea-field">
                  <i class="fas fa-comment-alt"></i>
                  <textarea
                    id="additional-comments"
                    v-model="formData.additionalComments"
                    rows="3"
                    placeholder="Any additional context that might help with your case..."
                  ></textarea>
                </div>
                <div class="character-counter">
                  {{ formData.additionalComments.length }}/500 characters
                </div>
              </div>
            </div>

            <div class="consent-section">
              <h4>Consent & Agreements</h4>
              <p>Please review and confirm the following to proceed:</p>

              <div class="consent-options">
                <div class="consent-option">
                  <input
                    type="checkbox"
                    id="consent-terms"
                    v-model="formData.consentTerms"
                  />
                  <label for="consent-terms">
                    I agree to the
                    <a href="#" @click.prevent="viewTerms">Terms of Service</a>
                    and
                    <a href="#" @click.prevent="viewPrivacyPolicy"
                      >Privacy Policy</a
                    >
                  </label>
                </div>
                <span v-if="errors.consentTerms" class="error-message">{{
                  errors.consentTerms
                }}</span>

                <div class="consent-option">
                  <input
                    type="checkbox"
                    id="consent-share"
                    v-model="formData.consentShare"
                  />
                  <label for="consent-share">
                    I authorize Gambler's Future to share necessary details of
                    my complaint with the gambling operator for resolution
                    purposes
                  </label>
                </div>
                <span v-if="errors.consentShare" class="error-message">{{
                  errors.consentShare
                }}</span>

                <div class="consent-option">
                  <input
                    type="checkbox"
                    id="consent-accuracy"
                    v-model="formData.consentAccuracy"
                  />
                  <label for="consent-accuracy">
                    I confirm that all information provided is accurate and
                    complete to the best of my knowledge
                  </label>
                </div>
                <span v-if="errors.consentAccuracy" class="error-message">{{
                  errors.consentAccuracy
                }}</span>
              </div>
            </div>

            <div class="form-actions">
              <div class="form-action-left">
                <button
                  type="button"
                  class="back-button"
                  @click="goToPreviousStep"
                >
                  <i class="fas fa-arrow-left"></i>
                  <span>Back</span>
                </button>
              </div>
              <div class="form-action-right">
                <button
                  type="button"
                  class="save-draft-button"
                  @click="saveDraft"
                >
                  <i class="fas fa-save"></i>
                  <span>Save as Draft</span>
                </button>
                <button
                  type="button"
                  class="next-button"
                  @click="validateAndProceed"
                >
                  <span>Continue to Review</span>
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Step 5: Review & Submit -->
          <div v-if="currentStep === 4" class="form-step">
            <div class="step-header">
              <h3 class="step-title">Review & Submit</h3>
              <p class="step-description">
                Please review all the information below before submitting your
                complaint. You can go back to any section to make changes if
                needed.
              </p>
            </div>

            <div class="review-intro">
              <div class="review-icon">
                <i class="fas fa-clipboard-check"></i>
              </div>
              <div class="review-intro-content">
                <h4>Final Check</h4>
                <p>
                  Once submitted, your complaint will be reviewed by our team
                  within 24-48 hours. Make sure all details are accurate and
                  complete.
                </p>
              </div>
            </div>

            <div class="review-sections">
              <!-- Casino Information Section -->
              <div class="review-section">
                <div class="review-section-header">
                  <h4>
                    <i class="fas fa-building"></i>
                    Casino Information
                  </h4>
                  <button
                    type="button"
                    class="edit-section-button"
                    @click="editSection(0)"
                  >
                    <i class="fas fa-pencil-alt"></i>
                    <span>Edit</span>
                  </button>
                </div>
                <div class="review-content">
                  <div class="review-item">
                    <div class="review-label">Casino Name:</div>
                    <div class="review-value">{{ formData.casinoName }}</div>
                  </div>
                  <div class="review-item">
                    <div class="review-label">Casino Website:</div>
                    <div class="review-value">{{ formData.casinoWebsite }}</div>
                  </div>
                  <div class="review-item">
                    <div class="review-label">Licensing Authority:</div>
                    <div class="review-value">
                      {{
                        getLicensingAuthorityName(formData.licensingAuthority)
                      }}
                      <span v-if="formData.licensingAuthority === 'other'">
                        ({{ formData.otherAuthority }})
                      </span>
                    </div>
                  </div>
                  <div class="review-item">
                    <div class="review-label">Your Account:</div>
                    <div class="review-value">
                      {{ formData.accountIdentifier }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Complaint Details Section -->
              <div class="review-section">
                <div class="review-section-header">
                  <h4>
                    <i class="fas fa-exclamation-circle"></i>
                    Complaint Details
                  </h4>
                  <button
                    type="button"
                    class="edit-section-button"
                    @click="editSection(1)"
                  >
                    <i class="fas fa-pencil-alt"></i>
                    <span>Edit</span>
                  </button>
                </div>
                <div class="review-content">
                  <div class="review-item">
                    <div class="review-label">Type of Issue:</div>
                    <div class="review-value">
                      {{ getComplaintTypeLabel() }}
                      <span v-if="formData.complaintType === 'other'">
                        ({{ formData.otherIssueType }})
                      </span>
                    </div>
                  </div>
                  <div class="review-item">
                    <div class="review-label">Date of Incident:</div>
                    <div class="review-value">
                      {{ formatDate(formData.incidentDate) }}
                    </div>
                  </div>
                  <div class="review-item" v-if="formData.amountDisputed">
                    <div class="review-label">Amount in Dispute:</div>
                    <div class="review-value">
                      {{ formData.amountDisputed }} {{ formData.currency }}
                    </div>
                  </div>
                  <div class="review-item-full">
                    <div class="review-label">Issue Description:</div>
                    <div class="review-value review-text">
                      {{ formData.issueDescription }}
                    </div>
                  </div>
                  <div class="review-item">
                    <div class="review-label">Contacted Casino:</div>
                    <div class="review-value">
                      {{ formData.contactedOperator === "yes" ? "Yes" : "No" }}
                    </div>
                  </div>
                  <div
                    class="review-item-full"
                    v-if="formData.contactedOperator === 'yes'"
                  >
                    <div class="review-label">Resolution Attempts:</div>
                    <div class="review-value review-text">
                      {{ formData.resolutionAttempts }}
                    </div>
                  </div>
                  <div class="review-item-full">
                    <div class="review-label">Desired Resolution:</div>
                    <div class="review-value review-text">
                      {{ formData.desiredOutcome }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Evidence Section -->
              <div class="review-section">
                <div class="review-section-header">
                  <h4>
                    <i class="fas fa-file-alt"></i>
                    Evidence
                  </h4>
                  <button
                    type="button"
                    class="edit-section-button"
                    @click="editSection(2)"
                  >
                    <i class="fas fa-pencil-alt"></i>
                    <span>Edit</span>
                  </button>
                </div>
                <div class="review-content">
                  <div v-if="formData.noEvidence" class="review-item">
                    <div class="review-value no-evidence-notice">
                      <i class="fas fa-info-circle"></i>
                      No evidence files have been provided.
                    </div>
                  </div>
                  <div
                    v-else-if="uploadedFiles.length === 0"
                    class="review-item"
                  >
                    <div class="review-value no-evidence-notice">
                      <i class="fas fa-info-circle"></i>
                      No evidence files have been provided.
                    </div>
                  </div>
                  <div v-else class="review-files">
                    <div
                      v-for="(file, index) in uploadedFiles"
                      :key="index"
                      class="review-file"
                    >
                      <div class="review-file-icon">
                        <i
                          v-if="file.type.includes('image')"
                          class="fas fa-file-image"
                        ></i>
                        <i
                          v-else-if="file.type.includes('pdf')"
                          class="fas fa-file-pdf"
                        ></i>
                        <i v-else class="fas fa-file"></i>
                      </div>
                      <div class="review-file-details">
                        <div class="review-file-name">{{ file.name }}</div>
                        <div class="review-file-desc" v-if="file.description">
                          {{ file.description }}
                        </div>
                        <div class="review-file-desc" v-else>
                          <em>No description</em>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Your Information Section -->
              <div class="review-section">
                <div class="review-section-header">
                  <h4>
                    <i class="fas fa-user"></i>
                    Your Information
                  </h4>
                  <button
                    type="button"
                    class="edit-section-button"
                    @click="editSection(3)"
                  >
                    <i class="fas fa-pencil-alt"></i>
                    <span>Edit</span>
                  </button>
                </div>
                <div class="review-content">
                  <div class="review-item">
                    <div class="review-label">Name:</div>
                    <div class="review-value">
                      {{ formData.firstName }} {{ formData.lastName }}
                    </div>
                  </div>
                  <div class="review-item">
                    <div class="review-label">Email:</div>
                    <div class="review-value">{{ formData.email }}</div>
                  </div>
                  <div class="review-item" v-if="formData.phone">
                    <div class="review-label">Phone:</div>
                    <div class="review-value">{{ formData.phone }}</div>
                  </div>
                  <div class="review-item">
                    <div class="review-label">Country:</div>
                    <div class="review-value">
                      {{ getCountryName(formData.country) }}
                      <span v-if="formData.country === 'OTHER'">
                        ({{ formData.otherCountry }})
                      </span>
                    </div>
                  </div>
                  <div class="review-item">
                    <div class="review-label">Preferred Contact:</div>
                    <div class="review-value">
                      {{
                        formData.preferredContact === "email"
                          ? "Email"
                          : "Phone"
                      }}
                    </div>
                  </div>
                  <div class="review-item">
                    <div class="review-label">Case Updates:</div>
                    <div class="review-value">
                      <div class="update-preferences">
                        <span
                          v-for="(pref, index) in formData.updatePreferences"
                          :key="index"
                          class="update-preference"
                        >
                          <i class="fas fa-check-circle"></i>
                          {{ getUpdatePreferenceName(pref) }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="review-item">
                    <div class="review-label">Email Notifications:</div>
                    <div class="review-value">
                      {{ formData.emailUpdates ? "Enabled" : "Disabled" }}
                    </div>
                  </div>
                  <div class="review-item">
                    <div class="review-label">Marketing Communications:</div>
                    <div class="review-value">
                      {{ formData.allowMarketing ? "Enabled" : "Disabled" }}
                    </div>
                  </div>
                  <div class="review-item">
                    <div class="review-label">Preferred Language:</div>
                    <div class="review-value">
                      {{ getLanguageName(formData.preferredLanguage) }}
                    </div>
                  </div>
                  <div
                    class="review-item-full"
                    v-if="formData.additionalComments"
                  >
                    <div class="review-label">Additional Information:</div>
                    <div class="review-value review-text">
                      {{ formData.additionalComments }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="privacy-reminder">
              <div class="reminder-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <div class="reminder-content">
                <h4>Privacy & Data Security</h4>
                <p>
                  Your information is securely stored and processed according to
                  our Privacy Policy. We share only the necessary information
                  with the gambling operator to resolve your complaint.
                </p>
              </div>
            </div>

            <div class="submit-container">
              <div class="submit-header">
                <h4>Ready to Submit Your Complaint?</h4>
                <p>
                  Once submitted, you'll receive a confirmation email with your
                  case number.
                </p>
              </div>

              <div class="final-agreements">
                <div class="final-agreement">
                  <input
                    type="checkbox"
                    id="final-accuracy"
                    v-model="finalConfirmation.accuracy"
                  />
                  <label for="final-accuracy"
                    >I confirm that all information provided is accurate and
                    complete to the best of my knowledge</label
                  >
                </div>
                <span v-if="submitErrors.accuracy" class="error-message">{{
                  submitErrors.accuracy
                }}</span>

                <div class="final-agreement">
                  <input
                    type="checkbox"
                    id="final-terms"
                    v-model="finalConfirmation.terms"
                  />
                  <label for="final-terms"
                    >I agree to the
                    <a href="#" @click.prevent="viewTerms">Terms of Service</a>
                    and
                    <a href="#" @click.prevent="viewPrivacyPolicy"
                      >Privacy Policy</a
                    ></label
                  >
                </div>
                <span v-if="submitErrors.terms" class="error-message">{{
                  submitErrors.terms
                }}</span>
              </div>

              <div class="form-actions submit-actions">
                <div class="form-action-left">
                  <button
                    type="button"
                    class="back-button"
                    @click="goToPreviousStep"
                  >
                    <i class="fas fa-arrow-left"></i>
                    <span>Back</span>
                  </button>
                </div>
                <div class="form-action-right">
                  <button
                    type="button"
                    class="save-draft-button"
                    @click="saveDraft"
                  >
                    <i class="fas fa-save"></i>
                    <span>Save for Later</span>
                  </button>
                  <button
                    type="button"
                    class="submit-button"
                    @click="submitComplaint"
                    :disabled="submitting"
                  >
                    <span v-if="!submitting">Submit Complaint</span>
                    <span v-else>
                      <i class="fas fa-spinner fa-spin"></i>
                      Submitting...
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Success modal (shown after successful submission) -->
            <div v-if="successModal.visible" class="success-modal">
              <div class="modal-overlay" @click="closeSuccessModal"></div>
              <div class="modal-container success-container">
                <div class="success-header">
                  <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <h3>Complaint Submitted Successfully!</h3>
                </div>
                <div class="success-content">
                  <p>
                    Your complaint has been received and will be reviewed by our
                    team within 24-48 hours.
                  </p>
                  <div class="case-number">
                    <div class="case-number-label">Your Case Number:</div>
                    <div class="case-number-value">
                      {{ successModal.caseNumber }}
                    </div>
                  </div>
                  <p>
                    We've sent a confirmation email to
                    <strong>{{ formData.email }}</strong> with all the details
                    and next steps.
                  </p>
                  <div class="next-steps">
                    <h4>What Happens Next?</h4>
                    <ul>
                      <li>Our team will review your complaint</li>
                      <li>
                        We'll contact the gambling operator on your behalf
                      </li>
                      <li>
                        You'll be updated throughout the resolution process
                      </li>
                      <li>
                        You can check your case status using your case number
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="success-actions">
                  <button
                    type="button"
                    class="track-case-button"
                    @click="trackCase"
                  >
                    <i class="fas fa-search"></i>
                    <span>Track Your Case</span>
                  </button>
                  <button
                    type="button"
                    class="success-close-button"
                    @click="closeSuccessModal"
                  >
                    <i class="fas fa-times"></i>
                    <span>Close</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Side information panel -->
        <div class="form-sidebar">
          <div class="sidebar-section">
            <div class="sidebar-icon"><i class="fas fa-shield-alt"></i></div>
            <h3>What Happens Next?</h3>
            <ul class="process-list">
              <li>
                <i class="fas fa-check-circle"></i>
                <span>We review your complaint within 24-48 hours</span>
              </li>
              <li>
                <i class="fas fa-check-circle"></i>
                <span>Our team contacts the operator on your behalf</span>
              </li>
              <li>
                <i class="fas fa-check-circle"></i>
                <span>We mediate to reach a fair resolution</span>
              </li>
              <li>
                <i class="fas fa-check-circle"></i>
                <span>You're kept updated throughout the process</span>
              </li>
            </ul>
          </div>

          <div class="sidebar-section">
            <div class="sidebar-icon"><i class="fas fa-lightbulb"></i></div>
            <h3>Tips for Success</h3>
            <ul class="tips-list">
              <li>
                <i class="fas fa-angle-right"></i>
                <span
                  >Be specific and include dates, amounts, and game names</span
                >
              </li>
              <li>
                <i class="fas fa-angle-right"></i>
                <span
                  >Upload screenshots and communication records as
                  evidence</span
                >
              </li>
              <li>
                <i class="fas fa-angle-right"></i>
                <span>Clearly state what resolution you're seeking</span>
              </li>
              <li>
                <i class="fas fa-angle-right"></i>
                <span>Maintain a professional tone to improve outcomes</span>
              </li>
            </ul>
            <a href="#" class="sidebar-link" @click.prevent="goToFaq">
              <i class="fas fa-info-circle"></i>
              <span>View more tips in FAQ</span>
            </a>
          </div>

          <div class="need-help">
            <h3>Need Help?</h3>
            <p>
              Our support team is available to assist you with your complaint
              submission.
            </p>
            <div class="help-buttons">
              <button
                type="button"
                class="help-button chat"
                @click="openSupportChat"
              >
                <i class="fas fa-comments"></i>
                <span>Live Chat</span>
              </button>
              <a
                href="mailto:support@gamblersfuture.com"
                class="help-button email"
              >
                <i class="fas fa-envelope"></i>
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onBeforeUnmount, onMounted } from "vue";

// Form steps configuration
const formSteps = [
  { label: "Casino Information", key: "casino" },
  { label: "Complaint Details", key: "details" },
  { label: "Evidence Upload", key: "evidence" },
  { label: "Your Information", key: "user" },
  { label: "Review & Submit", key: "review" },
];

// Current step tracker
const currentStep = ref(0);

// Form data model
const formData = reactive({
  // Casino Information (Step 1)
  casinoName: "",
  casinoWebsite: "",
  licensingAuthority: "",
  otherAuthority: "",
  accountIdentifier: "",

  // Complaint Details (Step 2)
  complaintType: "",
  otherIssueType: "",
  incidentDate: "",
  amountDisputed: "",
  currency: "USD",
  issueDescription: "",
  contactedOperator: "",
  resolutionAttempts: "",
  desiredOutcome: "",

  // Evidence Upload (Step 3)
  noEvidence: false,
  evidenceFiles: [],

  // User Information (Step 4)
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  otherCountry: "",
  preferredContact: "email",
  updatePreferences: [],
  emailUpdates: true,
  allowMarketing: false,
  preferredLanguage: "en",
  additionalComments: "",
  consentTerms: false,
  consentShare: false,
  consentAccuracy: false,
});

// File handling state
const isDragging = ref(false);
const uploadedFiles = ref([]);
const fileInput = ref(null); // Check that this is properly defined
const previewModal = reactive({
  visible: false,
  file: null,
  url: null,
});

// Form validation errors
const errors = reactive({
  casinoName: "",
  casinoWebsite: "",
  accountIdentifier: "",
  complaintType: "",
  incidentDate: "",
  issueDescription: "",
  contactedOperator: "",
  resolutionAttempts: "",
  desiredOutcome: "",
  files: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  otherCountry: "",
  preferredContact: "",
  updatePreferences: "",
  consentTerms: "",
  consentShare: "",
  consentAccuracy: "",
});

// Review & Submit step state
const submitting = ref(false);
const finalConfirmation = reactive({
  accuracy: false,
  terms: false,
});
const submitErrors = reactive({
  accuracy: "",
  terms: "",
});
const successModal = reactive({
  visible: false,
  caseNumber: "",
});

// Auto-save interval
let autoSaveInterval;

onMounted(() => {
  loadSavedDraft();
  // Start auto-save
  autoSaveInterval = setInterval(() => {
    autoSaveDraft();
  }, 30000); // Auto-save every 30 seconds
});

onBeforeUnmount(() => {
  // Clear auto-save interval when component is destroyed
  clearInterval(autoSaveInterval);
});

function autoSaveDraft() {
  // Only auto-save if the form has some data
  if (formData.casinoName || formData.issueDescription || formData.firstName) {
    try {
      localStorage.setItem(
        "complaintFormDraft",
        JSON.stringify({
          ...formData,
          lastSaved: new Date().toISOString(),
          isAutoSave: true,
        })
      );
      console.log("Form auto-saved:", new Date().toLocaleTimeString());
    } catch (error) {
      console.error("Error auto-saving:", error);
    }
  }
}

// Navigation methods
function goToNextStep() {
  if (currentStep.value < formSteps.length - 1) {
    currentStep.value++;
    window.scrollTo(0, 0);
  }
}

function goToPreviousStep() {
  if (currentStep.value > 0) {
    currentStep.value--;
    window.scrollTo(0, 0);
  }
}

function handleStepClick(index) {
  // Only allow clicking on completed steps
  if (currentStep.value > index) {
    currentStep.value = index;
    window.scrollTo(0, 0);
  }
}

// Validation
function validateStep1() {
  let isValid = true;

  // Reset errors
  errors.casinoName = "";
  errors.casinoWebsite = "";
  errors.accountIdentifier = "";

  // Validate casino name
  if (!formData.casinoName.trim()) {
    errors.casinoName = "Casino name is required";
    isValid = false;
  } else if (formData.casinoName.trim().length < 2) {
    errors.casinoName = "Please enter a valid casino name";
    isValid = false;
  }

  // Validate website
  if (!formData.casinoWebsite.trim()) {
    errors.casinoWebsite = "Casino website is required";
    isValid = false;
  } else if (!isValidUrl(formData.casinoWebsite)) {
    errors.casinoWebsite = "Please enter a valid URL";
    isValid = false;
  }

  // Validate account identifier
  if (!formData.accountIdentifier.trim()) {
    errors.accountIdentifier = "Account username or email is required";
    isValid = false;
  }

  return isValid;
}

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

function validateStep2() {
  let isValid = true;

  // Reset errors
  errors.complaintType = "";
  errors.incidentDate = "";
  errors.issueDescription = "";
  errors.contactedOperator = "";
  errors.resolutionAttempts = "";
  errors.desiredOutcome = "";

  // Validate complaint type
  if (!formData.complaintType) {
    errors.complaintType = "Please select an issue type";
    isValid = false;
  }

  // Validate incident date
  if (!formData.incidentDate) {
    errors.incidentDate = "Please provide the date when this issue occurred";
    isValid = false;
  }

  // Validate description
  if (!formData.issueDescription.trim()) {
    errors.issueDescription = "Please describe your issue in detail";
    isValid = false;
  } else if (formData.issueDescription.trim().length < 30) {
    errors.issueDescription =
      "Please provide more details about your issue (at least 30 characters)";
    isValid = false;
  } else if (formData.issueDescription.length > 4000) {
    errors.issueDescription =
      "Description is too long (maximum 4000 characters)";
    isValid = false;
  }

  // Validate contacted operator
  if (!formData.contactedOperator) {
    errors.contactedOperator =
      "Please indicate if you have contacted the casino";
    isValid = false;
  }

  // Validate resolution attempts if user selected "yes"
  if (
    formData.contactedOperator === "yes" &&
    (!formData.resolutionAttempts.trim() ||
      formData.resolutionAttempts.length < 10)
  ) {
    errors.resolutionAttempts =
      "Please describe your attempts to resolve this with the casino";
    isValid = false;
  }

  // Validate desired outcome
  if (!formData.desiredOutcome.trim()) {
    errors.desiredOutcome = "Please describe your desired resolution";
    isValid = false;
  } else if (formData.desiredOutcome.trim().length < 10) {
    errors.desiredOutcome =
      "Please provide more details about your desired resolution";
    isValid = false;
  }

  return isValid;
}

function validateStep3() {
  let isValid = true;

  // Reset errors
  errors.files = "";

  // Check if files are still uploading
  const uploading = uploadedFiles.value.some((file) => file.uploading);
  if (uploading) {
    errors.files = "Please wait for all files to finish uploading";
    isValid = false;
  }

  // No validation required if user checked "no evidence"
  if (formData.noEvidence) {
    return true;
  }

  // If user hasn't checked "no evidence" but also hasn't uploaded any files,
  // we'll still allow them to proceed but show a confirmation
  if (!formData.noEvidence && uploadedFiles.value.length === 0) {
    const confirmed = confirm(
      "Proceeding without evidence may reduce the chances of successful resolution. Continue anyway?"
    );
    if (!confirmed) {
      isValid = false;
    } else {
      // They confirmed, so we'll set noEvidence to true for them
      formData.noEvidence = true;
    }
  }

  return isValid;
}

function validateStep4() {
  let isValid = true;

  // Reset errors
  errors.firstName = "";
  errors.lastName = "";
  errors.email = "";
  errors.phone = "";
  errors.country = "";
  errors.otherCountry = "";
  errors.preferredContact = "";
  errors.updatePreferences = "";
  errors.consentTerms = "";
  errors.consentShare = "";
  errors.consentAccuracy = "";

  // Validate first name
  if (!formData.firstName.trim()) {
    errors.firstName = "First name is required";
    isValid = false;
  }

  // Validate last name
  if (!formData.lastName.trim()) {
    errors.lastName = "Last name is required";
    isValid = false;
  }

  // Validate email
  if (!formData.email.trim()) {
    errors.email = "Email address is required";
    isValid = false;
  } else if (!isValidEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
    isValid = false;
  }

  // Validate phone (if provided)
  if (formData.phone && !isValidPhone(formData.phone)) {
    errors.phone = "Please enter a valid phone number";
    isValid = false;
  }

  // Validate phone if preferred contact is phone
  if (formData.preferredContact === "phone" && !formData.phone) {
    errors.phone =
      "Phone number is required if preferred contact method is phone";
    isValid = false;
  }

  // Validate country
  if (!formData.country) {
    errors.country = "Please select your country of residence";
    isValid = false;
  }

  // Validate other country if 'OTHER' is selected
  if (formData.country === "OTHER" && !formData.otherCountry.trim()) {
    errors.otherCountry = "Please specify your country";
    isValid = false;
  }

  // Validate preferred contact method
  if (!formData.preferredContact) {
    errors.preferredContact = "Please select your preferred contact method";
    isValid = false;
  }

  // Validate update preferences
  if (formData.updatePreferences.length === 0) {
    errors.updatePreferences = "Please select at least one update preference";
    isValid = false;
  }

  // Validate consents
  if (!formData.consentTerms) {
    errors.consentTerms =
      "You must agree to the Terms of Service and Privacy Policy";
    isValid = false;
  }

  if (!formData.consentShare) {
    errors.consentShare =
      "You must authorize sharing necessary details with the operator";
    isValid = false;
  }

  if (!formData.consentAccuracy) {
    errors.consentAccuracy =
      "You must confirm the accuracy of the information provided";
    isValid = false;
  }

  // Validate additional comments length
  if (formData.additionalComments.length > 500) {
    errors.additionalComments =
      "Additional comments must be less than 500 characters";
    isValid = false;
  }

  return isValid;
}

function isValidEmail(email) {
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  if (!phone) return true; // Phone is optional
  // Basic international phone number validation
  // Allows +, spaces, dashes, parentheses, and numbers
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
  return phoneRegex.test(phone) && phone.length >= 7;
}

function viewTerms() {
  console.log("View terms of service");
  alert("Terms of Service would open here");
}

function viewPrivacyPolicy() {
  console.log("View privacy policy");
  alert("Privacy Policy would open here");
}

function validateAndProceed() {
  let isValid = false;

  if (currentStep.value === 0) {
    isValid = validateStep1();
  } else if (currentStep.value === 1) {
    isValid = validateStep2();
  } else if (currentStep.value === 2) {
    isValid = validateStep3();
  } else if (currentStep.value === 3) {
    isValid = validateStep4();
  } else {
    // Future steps validation will be added later
    isValid = true;
  }

  if (isValid) {
    goToNextStep();
  } else {
    // Scroll to the first error
    setTimeout(() => {
      const firstError = document.querySelector(".error-message");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  }
}

// Utility functions
function saveDraft() {
  try {
    // Save form data to localStorage
    localStorage.setItem(
      "complaintFormDraft",
      JSON.stringify({
        ...formData,
        lastSaved: new Date().toISOString(),
      })
    );
    alert(
      "Your complaint draft has been saved. You can return to complete it later."
    );
  } catch (error) {
    console.error("Error saving draft:", error);
    alert("There was an error saving your draft. Please try again.");
  }
}

function loadSavedDraft() {
  try {
    const savedDraft = localStorage.getItem("complaintFormDraft");
    if (savedDraft) {
      const draft = JSON.parse(savedDraft);
      // Ask user if they want to load the saved draft
      if (
        confirm(
          "We found a saved draft of your complaint. Would you like to continue where you left off?"
        )
      ) {
        // Update the formData with the saved values
        Object.keys(draft).forEach((key) => {
          if (key in formData) {
            formData[key] = draft[key];
          }
        });

        // If files were saved (just metadata, not actual files)
        if (draft.evidenceFiles && draft.evidenceFiles.length > 0) {
          // Show a notice that they need to reupload files
          alert(
            "Please note that you will need to re-upload any evidence files that were part of your draft."
          );
        }
      } else {
        // User declined to load draft, clear it
        localStorage.removeItem("complaintFormDraft");
      }
    }
  } catch (error) {
    console.error("Error loading draft:", error);
  }
}

function goToFaq() {
  // Navigation to FAQ page or section
  console.log("Navigating to FAQ");
  // Implementation depends on your routing structure
}

function openSupportChat() {
  // Implementation for opening support chat
  console.log("Opening support chat");
  alert("Support chat would open here");
}

function getComplaintTypeLabel() {
  const typeLabels = {
    withdrawal: "Withdrawal",
    account: "Account",
    bonus: "Bonus",
    game: "Game",
    kyc: "Verification/KYC",
    deposit: "Deposit",
    support: "Customer Service",
    responsible: "Responsible Gambling",
  };
  return typeLabels[formData.complaintType] || "Other";
}

// File handling methods
function handleFileSelection(event) {
  const files = event.target.files;
  processFiles(files);
  // Reset the file input so the same file can be selected again if removed
  event.target.value = "";
}

function triggerFileInput() {
  fileInput.value.click();
}

function handleDragOver(event) {
  isDragging.value = true;
}

function handleDragLeave(event) {
  isDragging.value = false;
}

function handleFileDrop(event) {
  isDragging.value = false;
  const files = event.dataTransfer.files;
  processFiles(files);
}

function processFiles(files) {
  // Check if we've reached the file limit
  if (uploadedFiles.value.length + files.length > 5) {
    errors.files = "Maximum 5 files allowed";
    return;
  }

  errors.files = ""; // Clear any previous errors

  Array.from(files).forEach((file) => {
    // Check file type
    const validTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (!validTypes.includes(file.type)) {
      errors.files = "Only JPG, PNG and PDF files are accepted";
      return;
    }

    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      errors.files = "Files must be smaller than 5MB";
      return;
    }

    // Add file to our list with upload status
    const newFile = {
      name: file.name,
      size: file.size,
      type: file.type,
      file: file, // Original file object
      uploading: true,
      progress: 0,
      description: "",
      id: null, // Will be set after upload
    };

    uploadedFiles.value.push(newFile);
    simulateFileUpload(uploadedFiles.value.length - 1);
  });
}

function simulateFileUpload(fileIndex) {
  // This is a simulation of file uploading for demo purposes
  // In a real implementation, this would be an API call to upload the file
  let progress = 0;
  const interval = setInterval(() => {
    progress += 5;
    uploadedFiles.value[fileIndex].progress = progress;

    if (progress >= 100) {
      clearInterval(interval);
      uploadedFiles.value[fileIndex].uploading = false;
      uploadedFiles.value[fileIndex].id =
        "file-" + Date.now() + "-" + fileIndex; // Simulate server file ID
      // Update the form data with the file ID and description
      updateFormDataWithFiles();
    }
  }, 100);
}

function updateFormDataWithFiles() {
  // Map the uploaded files to the format we want to store in formData
  formData.evidenceFiles = uploadedFiles.value.map((file) => ({
    id: file.id,
    name: file.name,
    description: file.description,
  }));
}

function removeFile(index) {
  // In a real implementation, you might need to call an API to delete the file from the server
  uploadedFiles.value.splice(index, 1);
  updateFormDataWithFiles();
}

function formatFileSize(size) {
  if (size < 1024) {
    return size + " bytes";
  } else if (size < 1024 * 1024) {
    return (size / 1024).toFixed(1) + " KB";
  } else {
    return (size / (1024 * 1024)).toFixed(1) + " MB";
  }
}

function previewFile(file) {
  if (file.type.includes("image")) {
    previewModal.file = file;
    previewModal.url = URL.createObjectURL(file.file);
    previewModal.visible = true;
  }
  // For PDFs we could add a PDF viewer or open in a new tab
}

function closePreview() {
  previewModal.visible = false;
  if (previewModal.url) {
    URL.revokeObjectURL(previewModal.url);
    previewModal.url = null;
  }
  previewModal.file = null;
}

// Clean up object URLs when component is destroyed
onBeforeUnmount(() => {
  if (previewModal.url) {
    URL.revokeObjectURL(previewModal.url);
  }
});

// Helper functions for Review & Submit
function getLicensingAuthorityName(key) {
  const authorities = {
    ukgc: "UK Gambling Commission",
    mga: "Malta Gaming Authority",
    gibraltar: "Gibraltar Regulatory Authority",
    alderney: "Alderney Gambling Control Commission",
    isle_of_man: "Isle of Man Gambling Supervision Commission",
    kahnawake: "Kahnawake Gaming Commission",
    other: "Other",
    unknown: "Unknown",
  };
  return authorities[key] || "Not specified";
}

function getCountryName(code) {
  const countries = {
    US: "United States",
    CA: "Canada",
    GB: "United Kingdom",
    AU: "Australia",
    DE: "Germany",
    FR: "France",
    ES: "Spain",
    IT: "Italy",
    NL: "Netherlands",
    SE: "Sweden",
    NO: "Norway",
    FI: "Finland",
    DK: "Denmark",
    JP: "Japan",
    BR: "Brazil",
    MX: "Mexico",
    IN: "India",
    ZA: "South Africa",
    OTHER: "Other",
  };
  return countries[code] || "Not specified";
}

function getLanguageName(code) {
  const languages = {
    en: "English",
    es: "Spanish",
    fr: "French",
    de: "German",
    it: "Italian",
    pt: "Portuguese",
  };
  return languages[code] || "English";
}

function getUpdatePreferenceName(pref) {
  const preferences = {
    status: "Status changes",
    messages: "Messages from operator",
    resolution: "Resolution proposals",
  };
  return preferences[pref] || pref;
}

function formatDate(dateString) {
  if (!dateString) return "Not specified";

  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

// Jump to edit a specific section
function editSection(sectionIndex) {
  currentStep.value = sectionIndex;
  window.scrollTo(0, 0);
}

// Submit the complaint
function submitComplaint() {
  // Reset errors
  submitErrors.accuracy = "";
  submitErrors.terms = "";

  // Validate final confirmations
  let isValid = true;

  if (!finalConfirmation.accuracy) {
    submitErrors.accuracy = "Please confirm the accuracy of your information";
    isValid = false;
  }

  if (!finalConfirmation.terms) {
    submitErrors.terms =
      "Please agree to the Terms of Service and Privacy Policy";
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  // Show submitting state
  submitting.value = true;

  // This would be an API call in a real implementation
  // Simulating API call with timeout
  setTimeout(() => {
    submitting.value = false;

    // Generate a random case number
    const randomNum = Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0");
    successModal.caseNumber = `GF-${randomNum}`;

    // Show success modal
    successModal.visible = true;

    // In a real application, you would make an API call here to submit the form
    console.log("Form submitted:", formData);
  }, 2000);
}

// Success modal functions
function closeSuccessModal() {
  successModal.visible = false;

  // Reset form to initial state
  Object.keys(formData).forEach((key) => {
    if (Array.isArray(formData[key])) {
      formData[key] = [];
    } else if (typeof formData[key] === "boolean") {
      formData[key] = false;
    } else {
      formData[key] = "";
    }
  });

  // Set default values
  formData.currency = "USD";
  formData.preferredContact = "email";
  formData.emailUpdates = true;
  formData.preferredLanguage = "en";

  // Reset files
  uploadedFiles.value = [];

  // Reset step
  currentStep.value = 0;

  // Clear any errors
  Object.keys(errors).forEach((key) => {
    errors[key] = "";
  });

  // Clear localStorage draft
  localStorage.removeItem("complaintFormDraft");

  // Scroll to top
  window.scrollTo(0, 0);
}

function trackCase() {
  // In a real application, redirect to case tracking page
  alert(`You would be redirected to track case ${successModal.caseNumber}`);
}

// Check for saved drafts on component mount
onMounted(() => {
  loadSavedDraft();
});
</script>

<style scoped>
.complaint-form-section {
  padding: 6rem 0;
  background-color: #1a1721;
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 1rem;
  line-height: 1.2;
}

.section-title .highlight {
  background: linear-gradient(135deg, #ff6767, #ff9d67);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}

.section-subtitle {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 auto;
  max-width: 700px;
  line-height: 1.6;
}

/* Progress indicator */
.form-progress {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  position: relative;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.form-progress::before {
  content: "";
  position: absolute;
  top: 24px;
  left: 40px;
  right: 40px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 1;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  flex: 1;
}

.step-indicator {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.75rem;
  transition: all 0.3s ease;
}

.step-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.progress-step.active .step-indicator {
  background-color: rgba(255, 103, 103, 0.1);
  border-color: #ff6767;
  color: #ff6767;
}

.progress-step.active .step-label {
  color: white;
  font-weight: 600;
}

.progress-step.completed .step-indicator {
  background-color: #ff6767;
  border-color: #ff6767;
  color: white;
}

.progress-step.completed .step-label {
  color: white;
}

.progress-step.clickable {
  cursor: pointer;
}

.progress-step.clickable:hover .step-indicator {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 103, 103, 0.2);
}

/* Form container */
.form-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.form-card {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
}

.form-step {
  padding: 2.5rem;
}

.step-header {
  margin-bottom: 2rem;
}

.step-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
  color: white;
}

.step-description {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.5;
}

/* Form fields */
.form-fields {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-field label {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.required {
  color: #ff6767;
}

.field-with-icon {
  position: relative;
}

.field-with-icon i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.4);
}

.field-with-icon input,
.field-with-icon select,
.field-with-icon textarea {
  width: 100%;
  padding: 1rem 1rem 1rem 2.75rem;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.field-with-icon input:focus,
.field-with-icon select:focus,
.field-with-icon textarea:focus {
  outline: none;
  border-color: rgba(255, 103, 103, 0.5);
  box-shadow: 0 0 0 3px rgba(255, 103, 103, 0.1);
}

.field-with-icon select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px' opacity='0.4'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

.field-hint {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.4;
}

.error-message {
  font-size: 0.85rem;
  color: #ff6767;
  font-weight: 500;
}

/* Form help box */
.form-help-box {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 1.25rem;
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-left: 3px solid rgba(33, 150, 243, 0.5);
}

.help-icon {
  font-size: 1.25rem;
  color: #2196f3;
  margin-top: 0.25rem;
}

.help-content h4 {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: white;
}

.help-content p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.5;
}

/* Form actions */
.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 1.5rem;
}

.form-action-left,
.form-action-right {
  display: flex;
  gap: 1rem;
}

.back-button,
.save-draft-button,
.next-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-button {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.08);
  color: white;
}

.save-draft-button {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.save-draft-button:hover {
  background: rgba(255, 255, 255, 0.08);
  color: white;
}

.next-button {
  background: linear-gradient(135deg, #ff6767, #ff9d67);
  color: white;
  border: none;
  box-shadow: 0 5px 15px rgba(255, 103, 103, 0.2);
}

.next-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 103, 103, 0.3);
}

/* Form sidebar */
.form-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.sidebar-section {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding: 1.75rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.sidebar-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 103, 103, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.sidebar-icon i {
  font-size: 1.1rem;
  color: #ff6767;
}

.sidebar-section h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 1rem;
  color: white;
}

.process-list,
.tips-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.process-list li,
.tips-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.process-list li i {
  color: #4caf50;
  margin-top: 0.25rem;
}

.tips-list li i {
  color: #ff6767;
  margin-top: 0.25rem;
}

.process-list li span,
.tips-list li span {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.5;
}

.sidebar-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #2196f3;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  margin-top: 1rem;
  transition: all 0.2s ease;
}

.sidebar-link:hover {
  text-decoration: underline;
}

.need-help {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding: 1.75rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
}

.need-help h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
  color: white;
}

.need-help p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  margin: 0 0 1.25rem;
  line-height: 1.5;
}

.help-buttons {
  display: flex;
  gap: 1rem;
}

.help-button {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.help-button.chat {
  background: rgba(255, 103, 103, 0.1);
  color: #ff6767;
  border: 1px solid rgba(255, 103, 103, 0.2);
}

.help-button.chat:hover {
  background: rgba(255, 103, 103, 0.15);
}

.help-button.email {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.help-button.email:hover {
  background: rgba(255, 255, 255, 0.08);
  color: white;
}

/* Placeholder styling */
.form-placeholder,
.step-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  text-align: center;
  gap: 1.5rem;
}

.form-placeholder p,
.step-placeholder p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
}

/* Field groups */
.form-field-group {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-field-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.form-field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

/* Textarea styling */
.textarea-field textarea {
  resize: vertical;
  min-height: 100px;
}

.character-counter {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: right;
  margin-top: 0.5rem;
}

.character-counter.warning {
  color: #ff9800;
}

/* Radio options */
.radio-options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.radio-option input[type="radio"] {
  width: 18px;
  height: 18px;
  accent-color: #ff6767;
}

.radio-option label {
  font-weight: normal;
  cursor: pointer;
}

/* Conditional fields */
.conditional-field {
  animation: fadeIn 0.3s ease;
  margin-top: 0.5rem;
}

/* Information alerts */
.info-alert {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(33, 150, 243, 0.05);
  border-radius: 8px;
  margin-top: 0.5rem;
  border-left: 3px solid rgba(33, 150, 243, 0.5);
  animation: fadeIn 0.3s ease;
}

.info-alert i {
  color: #2196f3;
  margin-top: 0.2rem;
}

.info-alert span {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

/* Field descriptions */
.field-description {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin: -0.25rem 0 0.75rem;
  line-height: 1.5;
}

/* Money field with currency */
.money-field {
  display: flex;
}

.money-field input {
  border-radius: 8px 0 0 8px;
}

.currency-select {
  width: auto;
  min-width: 90px;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-left: none;
  border-radius: 0 8px 8px 0;
  color: white;
  font-size: 1rem;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px' opacity='0.4'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
}

/* Issue-specific guidance */
.issue-guidance {
  background: rgba(255, 152, 0, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-left: 3px solid rgba(255, 152, 0, 0.3);
  animation: fadeIn 0.3s ease;
}

.guidance-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.guidance-header i {
  color: #ff9800;
  font-size: 1.25rem;
}

.guidance-header h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: white;
}

.guidance-content ul {
  margin: 0;
  padding-left: 1.5rem;
}

.guidance-content li {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

/* Related terms and regulations */
.related-terms {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.related-terms-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.related-terms-header i {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.25rem;
}

.related-terms-header h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: white;
}

.related-terms-content p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  margin: 0 0 0.75rem;
  line-height: 1.5;
}

.regulations-list {
  margin: 0;
  padding-left: 1.25rem;
}

.regulations-list li {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
  line-height: 1.5;
}

.regulation-name {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-right: 0.25rem;
}

/* Evidence Upload styles */
.evidence-intro {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.evidence-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 103, 103, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.evidence-icon i {
  font-size: 1.25rem;
  color: #ff6767;
}

.evidence-intro-content h4 {
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: white;
}

.evidence-intro-content p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin: 0;
  line-height: 1.5;
}

.file-uploader {
  margin-bottom: 2.5rem;
}

.file-uploader-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.file-uploader-header h4 {
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0;
  color: white;
}

.file-limits {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
}

.upload-dropzone {
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;
}

.upload-dropzone.drag-over {
  border-color: #ff6767;
  background: rgba(255, 103, 103, 0.05);
}

.upload-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.upload-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}

.upload-icon i {
  font-size: 1.75rem;
  color: rgba(255, 255, 255, 0.4);
}

.upload-text {
  text-align: center;
}

.upload-text p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.05rem;
  margin: 0 0 0.5rem;
  line-height: 1.5;
}

.upload-text p span {
  color: #ff6767;
  font-weight: 500;
}

.upload-hint {
  font-size: 0.9rem !important;
  color: rgba(255, 255, 255, 0.5) !important;
}

.hidden-file-input {
  display: none;
}

.browse-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: rgba(255, 103, 103, 0.1);
  color: #ff6767;
  border-radius: 8px;
  border: 1px solid rgba(255, 103, 103, 0.2);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.browse-button:hover {
  background: rgba(255, 103, 103, 0.15);
  transform: translateY(-2px);
}

.file-error {
  margin: -0.5rem 0 1.5rem;
}

.uploaded-files {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.uploaded-files-header {
  padding: 1rem 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.uploaded-files-header h5 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: white;
}

.files-list {
  padding: 0.5rem;
}

.file-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  margin-bottom: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.file-item:last-child {
  margin-bottom: 0;
}

.file-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.file-item.uploading {
  border-color: rgba(255, 193, 7, 0.3);
  background: rgba(255, 193, 7, 0.03);
}

.file-icon {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.file-icon i {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.6);
}

.file-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.file-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.file-name {
  font-weight: 500;
  color: white;
  font-size: 0.95rem;
  max-width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.file-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
}

.file-status {
  color: #4caf50;
}

.file-item.uploading .file-status {
  color: #ffc107;
}

.upload-progress {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  margin-top: -0.25rem;
}

.progress-bar {
  height: 100%;
  background: #ffc107;
  border-radius: 3px;
  transition: width 0.3s ease;
}

.file-description-container {
  margin-top: 0.25rem;
}

.file-description-input {
  width: 100%;
  padding: 0.75rem;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: white;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.file-description-input:focus {
  outline: none;
  border-color: rgba(255, 103, 103, 0.5);
}

.file-description-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.file-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.file-preview-button,
.file-delete-button {
  width: 36px;
  height: 36px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.2s ease;
}

.file-preview-button:hover {
  background: rgba(33, 150, 243, 0.1);
  color: #2196f3;
}

.file-delete-button:hover {
  background: rgba(244, 67, 54, 0.1);
  color: #f44336;
}

.file-delete-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Evidence types */
.evidence-types {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.evidence-types-header {
  margin-bottom: 1.25rem;
}

.evidence-types-header h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: white;
}

.evidence-type-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.evidence-type {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.evidence-type-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 193, 7, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.evidence-type-icon i {
  font-size: 1.1rem;
  color: #ffc107;
}

.evidence-type-name {
  font-weight: 500;
  color: white;
  font-size: 0.95rem;
}

/* No evidence checkbox */
.no-evidence-container {
  margin-bottom: 2rem;
}

.no-evidence-checkbox {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.no-evidence-checkbox input[type="checkbox"] {
  width: 20px;
  height: 20px;
  accent-color: #ff6767;
}

.no-evidence-checkbox label {
  font-weight: 500;
  font-size: 1rem;
  color: white;
  cursor: pointer;
}

.no-evidence-note {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(255, 152, 0, 0.05);
  border-radius: 8px;
  border-left: 3px solid rgba(255, 152, 0, 0.3);
  animation: fadeIn 0.3s ease;
}

.no-evidence-note i {
  color: #ff9800;
  margin-top: 0.2rem;
}

.no-evidence-note p {
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

/* File preview modal */
.file-preview-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
}

.modal-container {
  position: relative;
  z-index: 1001;
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  background: #1a1721;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.modal-header h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: white;
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.modal-close {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.modal-content {
  flex: 1;
  overflow: auto;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .evidence-intro {
    flex-direction: column;
    text-align: center;
  }

  .evidence-icon {
    margin: 0 auto;
  }

  .evidence-type-grid {
    grid-template-columns: 1fr;
  }

  .file-item {
    flex-direction: column;
  }

  .file-icon {
    margin: 0 auto;
  }

  .file-info {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .file-name {
    max-width: 100%;
    text-align: center;
  }

  .file-actions {
    flex-direction: row;
    justify-content: center;
    margin-top: 0.75rem;
  }
}

@media (max-width: 480px) {
  .upload-dropzone {
    padding: 1.5rem 1rem;
  }

  .file-uploader-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

@media (max-width: 768px) {
  .form-field-row {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .money-field {
    flex-direction: column;
  }

  .money-field input {
    border-radius: 8px;
  }

  .currency-select {
    margin-top: 0.5rem;
    width: 100%;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
  }
}

@media (max-width: 1024px) {
  .form-container {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .complaint-form-section {
    padding: 3rem 0;
  }

  .form-progress {
    overflow-x: auto;
    padding-bottom: 1rem;
    justify-content: flex-start;
  }

  .progress-step {
    min-width: 120px;
  }

  .form-step {
    padding: 1.5rem;
  }

  .form-actions {
    flex-direction: column-reverse;
    gap: 1rem;
  }

  .form-action-left,
  .form-action-right {
    width: 100%;
  }

  .form-action-right {
    flex-direction: column;
  }

  .back-button,
  .save-draft-button,
  .next-button {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }

  .step-title {
    font-size: 1.3rem;
  }

  .help-buttons {
    flex-direction: column;
  }

  .form-help-box {
    flex-direction: column;
    text-align: center;
  }

  .help-icon {
    margin: 0 auto 0.5rem;
  }
}

/* User Information styles */
.privacy-notice {
  background: rgba(33, 150, 243, 0.05);
  border-radius: 8px;
  padding: 1.25rem;
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-left: 3px solid rgba(33, 150, 243, 0.5);
}

.notice-icon {
  font-size: 1.5rem;
  color: #2196f3;
  flex-shrink: 0;
}

.notice-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: white;
}

.notice-content p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.5;
}

.notice-content a {
  color: #2196f3;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.notice-content a:hover {
  text-decoration: underline;
}

/* Checkbox options */
.checkbox-options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 0.25rem;
}

.checkbox-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.checkbox-option input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #ff6767;
}

.checkbox-option label {
  font-weight: normal;
  cursor: pointer;
}

.contact-options {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

/* Notification settings */
.notification-settings {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.notification-settings h4 {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0 0 1rem;
  color: white;
}

/* Toggle switch */
.toggle-switch {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.toggle-switch input[type="checkbox"] {
  height: 0;
  width: 0;
  visibility: hidden;
  position: absolute;
}

.toggle-switch label {
  cursor: pointer;
  width: 50px;
  height: 26px;
  background: rgba(255, 255, 255, 0.1);
  display: block;
  border-radius: 100px;
  position: relative;
  transition: all 0.3s ease;
}

.toggle-switch label:after {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 100%;
  transition: all 0.3s ease;
}

.toggle-switch input:checked + label {
  background: rgba(255, 103, 103, 0.5);
}

.toggle-switch input:checked + label:after {
  left: calc(100% - 3px);
  transform: translateX(-100%);
  background: #ff6767;
}

.toggle-switch label:active:after {
  width: 26px;
}

.toggle-label {
  font-weight: 500;
  color: white;
  cursor: pointer;
}

/* Additional info section */
.additional-info {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.additional-info h4 {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: white;
}

.additional-info p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 1rem;
  line-height: 1.5;
}

/* Consent section */
.consent-section {
  background: rgba(255, 103, 103, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 103, 103, 0.1);
}

.consent-section h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: white;
}

.consent-section p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 1.25rem;
  line-height: 1.5;
}

.consent-options {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.consent-option {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.consent-option input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #ff6767;
  margin-top: 0.25rem;
}

.consent-option label {
  font-weight: normal;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.5;
}

.consent-option label a {
  color: #2196f3;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.consent-option label a:hover {
  text-decoration: underline;
}

/* Language field styling */
.language-field {
  max-width: 350px;
}

/* Review & Submit styles */
.review-intro {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.review-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(76, 175, 80, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.review-icon i {
  font-size: 1.25rem;
  color: #4caf50;
}

.review-intro-content h4 {
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: white;
}

.review-intro-content p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin: 0;
  line-height: 1.5;
}

.review-sections {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
}

.review-section {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.review-section-header {
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.review-section-header h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.review-section-header h4 i {
  color: rgba(255, 255, 255, 0.5);
}

.edit-section-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.edit-section-button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.review-content {
  padding: 1.5rem;
}

.review-item,
.review-item-full {
  display: flex;
  margin-bottom: 1.25rem;
}

.review-item-full {
  flex-direction: column;
  gap: 0.5rem;
}

.review-item:last-child,
.review-item-full:last-child {
  margin-bottom: 0;
}

.review-label {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  width: 40%;
  min-width: 160px;
  flex-shrink: 0;
}

.review-item-full .review-label {
  width: 100%;
  margin-bottom: 0.25rem;
}

.review-value {
  color: white;
  flex: 1;
}

.review-text {
  background: rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 6px;
  white-space: pre-line;
  line-height: 1.5;
}

.no-evidence-notice {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
}

.no-evidence-notice i {
  color: #ffc107;
}

.review-files {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.review-file {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}

.review-file-icon {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.review-file-icon i {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.6);
}

.review-file-details {
  flex: 1;
}

.review-file-name {
  font-weight: 500;
  color: white;
  margin-bottom: 0.25rem;
}

.review-file-desc {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
}

.update-preferences {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.update-preference {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.update-preference i {
  color: #4caf50;
}

.privacy-reminder {
  background: rgba(33, 150, 243, 0.05);
  border-radius: 8px;
  padding: 1.25rem;
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  border-left: 3px solid rgba(33, 150, 243, 0.5);
}

.reminder-icon {
  font-size: 1.5rem;
  color: #2196f3;
  flex-shrink: 0;
}

.reminder-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: white;
}

.reminder-content p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.5;
}

.submit-container {
  margin-top: 2rem;
  background: rgba(76, 175, 80, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid rgba(76, 175, 80, 0.1);
}

.submit-header {
  margin-bottom: 1.5rem;
  text-align: center;
}

.submit-header h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: white;
}

.submit-header p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.final-agreements {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.final-agreement {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.final-agreement input[type="checkbox"] {
  width: 20px;
  height: 20px;
  accent-color: #4caf50;
  margin-top: 0.25rem;
}

.final-agreement label {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.5;
}

.final-agreement label a {
  color: #2196f3;
  text-decoration: none;
  transition: all 0.2s ease;
}

.final-agreement label a:hover {
  text-decoration: underline;
}

.submit-actions {
  border-top: none;
  padding-top: 0;
}

.submit-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #4caf50, #2e7d32);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.2);
  min-width: 180px;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(76, 175, 80, 0.3);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-button i {
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Success modal styles */
.success-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.success-container {
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow: auto;
  background: #1a1721;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.success-header {
  background: rgba(76, 175, 80, 0.1);
  padding: 2rem 1.5rem;
  text-align: center;
  border-bottom: 1px solid rgba(76, 175, 80, 0.2);
}

.success-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(76, 175, 80, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.success-icon i {
  font-size: 3rem;
  color: #4caf50;
}

.success-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: white;
}

.success-content {
  padding: 1.5rem;
  line-height: 1.6;
}

.success-content p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 1.5rem;
}

.case-number {
  background: rgba(76, 175, 80, 0.05);
  border: 1px solid rgba(76, 175, 80, 0.2);
  border-radius: 8px;
  padding: 1.25rem;
  margin: 1.5rem 0;
  text-align: center;
}

.case-number-label {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
}

.case-number-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: #4caf50;
  letter-spacing: 1px;
}

.next-steps {
  margin-top: 1.5rem;
}

.next-steps h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
  color: white;
}

.next-steps ul {
  margin: 0;
  padding-left: 1.5rem;
}

.next-steps li {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.success-actions {
  display: flex;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  gap: 1rem;
}

.track-case-button,
.success-close-button {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.track-case-button {
  background: rgba(76, 175, 80, 0.1);
  color: #4caf50;
  border: 1px solid rgba(76, 175, 80, 0.2);
}

.track-case-button:hover {
  background: rgba(76, 175, 80, 0.15);
}

.success-close-button {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.success-close-button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

@media (max-width: 768px) {
  .review-item {
    flex-direction: column;
    gap: 0.5rem;
  }

  .review-label {
    width: 100%;
  }

  .review-intro {
    flex-direction: column;
    text-align: center;
  }

  .review-icon,
  .reminder-icon {
    margin: 0 auto;
  }

  .privacy-reminder {
    flex-direction: column;
    text-align: center;
  }

  .success-actions {
    flex-direction: column;
  }
}
</style>
