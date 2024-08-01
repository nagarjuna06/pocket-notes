import { useCallback, useEffect, useState } from "react";
import { getGroups } from "../apis/group";

const useGroup = () => {
  const [groups, setGroups] = useState([]);

  const fetchGroups = useCallback(async () => {
    const res = await getGroups();
    setGroups(res);
  }, []);

  useEffect(() => {
    fetchGroups();
  }, [fetchGroups]);

  return { groups };
};

export default useGroup;
