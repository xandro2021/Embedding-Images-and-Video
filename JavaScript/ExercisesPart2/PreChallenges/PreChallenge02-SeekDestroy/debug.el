(dap-register-debug-template
  "debugSeekDestroy"
  (list :type "node"
        :request "launch"
        ;; :program "/home/tales/Documents/Microverse/PreEnrollmentBootcamp/Embedding-Images-and-Video/sumAllPrimes.js"
        :args ["/home/tales/Documents/Microverse/PreEnrollmentBootcamp/Embedding-Images-and-Video/JavaScript/ExercisesPart2/PreChallenges/PreChallenge02-SeekDestroy/seekDestroy.js"]
        :runtimeArgs ["--nolazy" ]
        :sourceMaps t
        :cwd "/home/tales/Documents/Microverse/PreEnrollmentBootcamp/Embedding-Images-and-Video/JavaScript/ExercisesPart2/PreChallenges/PreChallenge02-SeekDestroy/"
        :protocol "inspector"
        :name "debugSeekDestroy"))
