import React, { FC } from 'react'

const AdminCombos: FC = () => {
  const { data, loading, error } = useQuery(getCombos)
}

export default AdminCombos