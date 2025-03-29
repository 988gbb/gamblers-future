import { defineStore } from "pinia";

export const useComplaintsStore = defineStore("complaints", {
  state: () => ({
    complaints: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchComplaints() {
      this.loading = true;
      this.error = null;

      try {
        // In a real app, fetch from API
        // Mock data for demonstration
        this.complaints = [
          {
            id: 1,
            user: "John Doe",
            email: "john@example.com",
            subject: "Casino Payout Issue",
            message: "I haven't received my payout after 14 days...",
            status: "new",
            date: "2023-07-15",
          },
          {
            id: 2,
            user: "Jane Smith",
            email: "jane@example.com",
            subject: "Bonus Not Applied",
            message: "The welcome bonus wasn't applied to my account...",
            status: "in-progress",
            date: "2023-07-10",
          },
        ];
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    async updateComplaintStatus(complaintId, newStatus) {
      this.loading = true;
      this.error = null;

      try {
        // In a real app, update via API
        const complaint = this.complaints.find((c) => c.id === complaintId);
        if (complaint) {
          complaint.status = newStatus;
        } else {
          throw new Error("Complaint not found");
        }
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    async respondToComplaint(complaintId, response) {
      this.loading = true;
      this.error = null;

      try {
        // In a real app, send response via API
        const complaint = this.complaints.find((c) => c.id === complaintId);
        if (complaint) {
          // Here you would typically update the complaint with the response
          // For now we'll just log it
          console.log(
            `Response sent to complaint #${complaintId}: ${response}`
          );
          return true;
        } else {
          throw new Error("Complaint not found");
        }
      } catch (err) {
        this.error = err.message;
        return false;
      } finally {
        this.loading = false;
      }
    },
  },
});
