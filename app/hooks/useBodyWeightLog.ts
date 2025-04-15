import { useQuery } from "@tanstack/react-query";
import BodyWeightLogService from "../services/BodyWeightLogService";

export const useBodyWeightLog = () => {
  return useQuery({
    queryKey: ["bodyWeightLog"],
    queryFn: BodyWeightLogService.getBodyWeightLog,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
