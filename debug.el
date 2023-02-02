(dap-register-debug-template
  "Debug File"
  (list :type "node"
        :request "launch"
        ;; :program "/home/tales/Documents/Microverse/PreEnrollmentBootcamp/Embedding-Images-and-Video/sumAllPrimes.js"
        :args ["/home/tales/Documents/Microverse/PreEnrollmentBootcamp/Embedding-Images-and-Video/sumAllPrimes.js"]
        :runtimeArgs ["--nolazy" ]
        :sourceMaps t
        :cwd "/home/tales/Documents/Microverse/PreEnrollmentBootcamp/Embedding-Images-and-Video/"
        :protocol "inspector"
        :name "Debug File"))
