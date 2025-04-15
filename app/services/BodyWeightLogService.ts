import { createClient } from "@supabase/supabase-js";
import { Database } from "../../database.types";

export namespace BodyWeightLogService {
  const createBodyWeightLogClient = () => {
    const supabase = createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL as string,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
    );

    return supabase;
  };

  export const getBodyWeightLog = async () => {
    const supabase = createBodyWeightLogClient();

    const { data, error } = await supabase.from("body_weight_log").select();
    if (error) throw error;
    return data;
  };
}

export default BodyWeightLogService;
