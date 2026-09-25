import blog1 from "../../assets/images/blog-1.jpg";
import blog2 from "../../assets/images/blog-2.jpg";
import blog3 from "../../assets/images/blog-3.jpg";
import blog4 from "../../assets/images/blog-4.jpg";

export interface BlogArticle {
  category: string;
  image: string;
  title: string;
  description: string;
}

export const categories = ["All", "Weight Loss Tips", "Healthy Eating", "Fitness and Exercise", "Mindset and Motivation", "Recipes and Meal Planning"];

export const blogArticles: BlogArticle[] = [
  { category: "Weight Loss Tips", image: blog1, title: "10 Effective Strategies for Sustainable Weight Loss", description: "Discover proven strategies for long-term weight loss success. Learn how to create healthy habits, set achievable goals, and make sustainable lifestyle changes." },
  { category: "Weight Loss Tips", image: blog4, title: "The Role of Portion Control in Weight Management", description: "Learn how portion control can help you manage your weight effectively. Find practical tips for controlling portion sizes and avoiding overeating." },
  { category: "Weight Loss Tips", image: blog2, title: "Understanding Emotional Eating and How to Overcome It", description: "Explore the connection between emotions and eating habits. Get valuable insights on how to identify emotional triggers and develop healthier coping mechanisms." },
  { category: "Weight Loss Tips", image: blog3, title: "How to Stay Motivated on Your Weight Loss Journey", description: "Find effective strategies to stay motivated and overcome obstacles during your weight loss journey. Get tips on setting realistic goals, tracking progress, and celebrating achievements." },
  { category: "Healthy Eating", image: blog4, title: "The Benefits of a Plant-Based Diet for Overall Health", description: "Explore the advantages of adopting a plant-based diet. Learn about the potential health benefits, nutrient-rich plant-based foods, and tips for transitioning to a plant-based lifestyle." },
  { category: "Healthy Eating", image: blog4, title: "Understanding Macronutrients: Carbohydrates, Proteins, and Fats", description: "Get a comprehensive overview of macronutrients and their role in a balanced diet. Discover the best sources of each macronutrient and how to incorporate them into your meals." },
  { category: "Fitness and Exercise", image: blog3, title: "Cardio vs. Strength Training: Which Is Better for Weight Loss?", description: "Explore the benefits of both cardio and strength training exercises for weight loss. Find out how to combine them effectively to maximize your results." },
  { category: "Fitness and Exercise", image: blog1, title: "Building a Home Workout Routine: Tips and Best Practices", description: "Discover how to create an effective workout routine at home. Learn about equipment options, exercise techniques, and ways to stay motivated." },
  { category: "Mindset and Motivation", image: blog2, title: "Developing a Positive Body Image and Self-Confidence", description: "Explore techniques for cultivating a positive body image and improving self-confidence. Learn how to embrace your body and appreciate your unique qualities." },
  { category: "Mindset and Motivation", image: blog3, title: "Overcoming Self-Sabotage in Your Weight Loss Journey", description: "Identify self-sabotaging behaviors and learn strategies to overcome them. Discover how to shift your mindset and develop healthier habits." },
  { category: "Recipes and Meal Planning", image: blog4, title: "Healthy and Flavorful Lunch Ideas for a Busy Lifestyle", description: "Discover a variety of tasty and nutritious lunch options that are perfect for those with busy schedules. These recipes are quick to prepare and packed with essential nutrients." },
  { category: "Recipes and Meal Planning", image: blog4, title: "Satisfying and Nutritious Dinner Recipes for Weight Loss", description: "Find a collection of flavorful dinner recipes that are both satisfying and supportive of your weight loss goals. These recipes are designed to be healthy and delicious." },
];

export const getBlogSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");

export const getBlogArticle = (slug: string) => blogArticles.find((article) => getBlogSlug(article.title) === slug);
