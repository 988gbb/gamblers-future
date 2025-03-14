import { ref, computed } from "vue";
import { useRouter } from "vue-router";

export interface SignupData {
  email: string;
  password: string;
  username: string;
}

export const useAuth = () => {
  const user = ref(null);
  const isAuthenticated = computed(() => !!user.value);
  const router = useRouter();

  const signup = async (data: SignupData) => {
    try {
      const response = await $fetch("/api/auth/signup", {
        method: "POST",
        body: data,
      });
      if (response.success) {
        await router.push("/login");
        return response;
      }
    } catch (error: any) {
      console.error("Signup error:", error);
      throw createError({
        statusCode: error.statusCode || 500,
        message: error.message || "Signup failed",
      });
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await $fetch("/api/auth/login", {
        method: "POST",
        body: { email, password },
      });
      if (response.success) {
        user.value = response.user;
        await router.push("/dashboard");
        return response;
      }
    } catch (error: any) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await $fetch("/api/auth/logout", { method: "POST" });
      user.value = null;
      await router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return {
    user,
    isAuthenticated,
    signup,
    login,
    logout,
  };
};
