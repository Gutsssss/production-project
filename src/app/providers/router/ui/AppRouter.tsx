import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { routerConfig } from "shared/config/routeConfig/routeConfig"


export const AppRouter = () => {
    return (
        <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          {Object.values(routerConfig).map(({element,path}) => {
            return <Route key={path} path={path} element={element}/>
          })}
        </Routes>
      </Suspense>
    )
}